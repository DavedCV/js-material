/* 
Let's say we've got a form that allows you to specify a username. When you try 
to submit an invalid value, it will show an error message and refocus on the 
input so you can fix your mistake.
*/

import * as React from "react";

/* function UsernameForm({ initialUsername = "", onSubmitUsername }) {
  const [username, setUsername] = React.useState(initialUsername);
  const [touched, setTouched] = React.useState(false);
  const usernameInputRef = React.useRef(null);

  const usernameIsLowerCase = username === username.toLowerCase();
  const usernameIsLongEnough = username.length >= 3;
  const usernameIsShortEnough = username.length <= 10;

  const formIsValid =
    usernameIsShortEnough && usernameIsLongEnough && usernameIsLowerCase;
  const displayErrorMessage = touched && !formIsValid;

  React.useEffect(() => {
    if (displayErrorMessage) usernameInputRef.current?.focus();
  }, [displayErrorMessage]);

  let errorMessage = null;

  if (!usernameIsLowerCase) {
    errorMessage = "Username must be lower case";
  } else if (!usernameIsLongEnough) {
    errorMessage = "Username must be at least 3 characters long";
  } else if (!usernameIsShortEnough) {
    errorMessage = "Username must be no longer than 10 characters";
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTouched(true);
    if (!formIsValid) return;
    onSubmitUsername(username);
  }

  function handleChange(event) {
    setUsername(event.currentTarget.value);
  }

  function handleBlur() {
    setTouched(true);
  }

  return (
    <form name="usernameForm" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          ref={usernameInputRef}
          id="usernameInput"
          type="text"
          value={username}
          onChange={handleChange}
          onBlur={handleBlur}
          pattern="[a-z]{3,10}"
          required
          aria-describedby={displayErrorMessage ? "error-message" : undefined}
        />
      </div>
      {displayErrorMessage ? (
        <div role="alert" className="error-message">
          {errorMessage}
        </div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
} */

/* export default function UseEffectWithRefs() {
  const [username, onSubmitUsername] = React.useState("");
  return (
    <UsernameForm
      initialUsername={username}
      onSubmitUsername={onSubmitUsername}
    />
  );
} */

/* 
Following the common recommended practice of including every reference used in the
useEffect in the dependency array, we would add usernameInputRef to the array.
*/

/* function UsernameForm({ initialUsername = "", onSubmitUsername }) {
  const [username, setUsername] = React.useState(initialUsername);
  const [touched, setTouched] = React.useState(false);
  const usernameInputRef = React.useRef(null);

  const usernameIsLowerCase = username === username.toLowerCase();
  const usernameIsLongEnough = username.length >= 3;
  const usernameIsShortEnough = username.length <= 10;

  const formIsValid =
    usernameIsShortEnough && usernameIsLongEnough && usernameIsLowerCase;
  const displayErrorMessage = touched && !formIsValid;

  React.useEffect(() => {
    if (displayErrorMessage) usernameInputRef.current?.focus();
  }, [displayErrorMessage, usernameInputRef]);

  let errorMessage = null;

  if (!usernameIsLowerCase) {
    errorMessage = "Username must be lower case";
  } else if (!usernameIsLongEnough) {
    errorMessage = "Username must be at least 3 characters long";
  } else if (!usernameIsShortEnough) {
    errorMessage = "Username must be no longer than 10 characters";
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTouched(true);
    if (!formIsValid) return;
    onSubmitUsername(username);
  }

  function handleChange(event) {
    setUsername(event.currentTarget.value);
  }

  function handleBlur() {
    setTouched(true);
  }

  return (
    <form name="usernameForm" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          ref={usernameInputRef}
          id="usernameInput"
          type="text"
          value={username}
          onChange={handleChange}
          onBlur={handleBlur}
          pattern="[a-z]{3,10}"
          required
          aria-describedby={displayErrorMessage ? "error-message" : undefined}
        />
      </div>
      {displayErrorMessage ? (
        <div role="alert" className="error-message">
          {errorMessage}
        </div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
} */

/* 

But there is a problem using refs as dependencies of the useEffect.

The fact that an update the a ref.current value doesn't trigger a re-render is 
an intentional feature. React doesn't keep track of the current value of a ref. 
You're responsible for referencing and mutating that value yourself. Because 
referencing DOM nodes is such a common use case, React will set the current 
value for you when you pass a ref prop to an element. But other than that, all 
React promises is that it will store your object and associate it to a 
particular instance of a component for as long as that component exists.

Let's recall the purpose of a dependency array: It's there so React can do 
something when there are changes in the values provided each time the component 
renders. And that's the answer right there! React can't know that the value 
changed if a change doesn't trigger a render! Here's a quick contrived example:
*/

function Counter() {
  const countRef = React.useRef(0);
  
  React.useEffect(() => {
    console.log(countRef.current);
  }, [countRef.current]);
  
  const increment = () => (countRef.current += 1);
  return <button onClick={increment}>Click me</button>;
}

/* 
I can click that button over and over again, but I'm never going to get that 
useEffect callback to run again because there's no re-render associated to the 
update in the value, I won't get any updated logs!

In fact: Anything you use in your effect callback that won't trigger a re-render 
when updated should not go into the dependency array.

Additionally (and consequentially), you should not expect any change in such 
values to result in the effect callback getting called. If you need the callback 
to be called when those things change, then you need to put it in useState 
(or useReducer).
*/

/* 
Conclusion ---------------------------------------------------------------------

So the reason you shouldn't list a ref in your useEffect dependency array is 
because it's an indication that you want the effect callback to re-run when a 
value is changed, but you're not notifying React when that change happens. So 
the solution is to either:

1. Not include it in the array
2. Put that value in useState/useReducer so an update will trigger a render.
*/
