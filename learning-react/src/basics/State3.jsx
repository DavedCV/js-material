import { useState } from "react";

// State should not be mutated -------------------------------------------------

/* export default function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });

  // BAD - Don't do this!
  const handleIncreaseAgeBad = () => {
    // mutating the current state object
    person.age = person.age + 1;
    setPerson(person);
  };

  // GOOD - Do this!
  const handleIncreaseAgeGood = () => {
    // copy the existing person object into a new object
    // while updating the age property
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAgeGood}>Increase age</button>
    </>
  );
} */

/*
How state updates --------------------------------------------------------------

State updates are asynchronous. 

The person state stays the same throughout the current render of the component. 
This is what “state as a snapshot” refers to.
*/

/* export default function State() {
  const [person, setPerson] = useState({ name: "John", age: 100 });

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson({ ...person, age: person.age + 1 });
    // we've called setPerson, surely person has updated?
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log("during render: ", person);

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
} */

/* 
State updater functions --------------------------------------------------------

When you pass in the value to the setState function, React will replace the 
current state with the value you passed in.

// here the age is increased only by 1
const handleIncreaseAge = () => {
   setPerson({ ...person, age: person.age + 1 });
   setPerson({ ...person, age: person.age + 1 });
}

what if I want to update the state multiple times using the latest state? This 
is where the state updater function comes in.

When a callback is passed to the setState function, it ensures that the latest 
state is passed in as an argument to the callback.

Using an updater is not always necessary. If you want to change the state using 
your previous state, and you prefer consistency over verbosity then you might 
consider using an updater.

// here the increase is by 2
const handleIncreaseAge = () => {
   setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
   setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
}

React batches state updates, and only re-renders the component once.
*/

/* 
Controlled components ----------------------------------------------------------

There are native HTML elements that maintain their own internal state. The input 
element is a great example. You type into an input and it updates its own value 
on every keystroke. For many use-cases, you would like to control the value of 
the input element i.e. set its value yourself. This is where controlled 
components come in.

Instead of letting the input maintain its own state, we define our own state 
using the useState hook. We then set the value prop of the input to the state 
variable and update the state variable on every onChange event. Now, every time 
the user types something in the input, React will ensure you have the latest 
comment/review/post (whatever the user was typing) in value.
*/

/* export default function State() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
} */

/* 
Update the Person component we’ve been using above.
- Add two separate input fields for first name and last name. The updated full 
name should be displayed on every keystroke on either of the two input fields.
-There are many ways you can do this. Keep in mind what you’ve learned in this 
lesson while coding it out.
*/

export default function State() {
  const [person, setPerson] = useState({ name: "John", age: 100 });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // GOOD - Do this!
  const handleIncreaseAgeGood = () => {
    // copy the existing person object into a new object
    // while updating the age property
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  return (
    <>
      <input
        type="text"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        placeholder="first name"
      />
      <input
        type="text"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        placeholder="last name"
      />

      <h1>
        {firstName} {lastName}
      </h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAgeGood}>Increase age</button>
    </>
  );
}
