import { useEffect, useState } from "react";

/* 

1. The infinite loop and side-effect updating state ----------------------------

The following example is an infinite loop cause the useEffect hook is updating 
the state, on every re-render, which in turn triggers the useEffect hook again, 
and so on.

*/

/*
function CountInputChanges() {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(-1);

  useEffect(() => setCount(count + 1));

  const onChange = ({ target }) => setValue(target.value);

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <div>Number of changes: {count}</div>
    </div>
  );
} */

/* 
To solve this problem, the solution is to correctly use the dependencies
array, to re-synchronize the effect with the state changes that it depends on.
In this case that dependencie is the value state.
*/

/* function CountInputChanges() {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(-1);

  useEffect(() => setCount(count + 1), [value]);

  const onChange = ({ target }) => setValue(target.value);

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <div>Number of changes: {count}</div>
    </div>
  );
}
 */

/* 
2. The inifnite loop and new objects references --------------------------------

Even if you set up correctly the useEffect() dependencies, still, you have to 
be careful when using objects as dependencies.

For example, the following CountSecrets component monitors the words that the 
user types into the input, and as soon as the user types the special word 
'secret', a counter of secrets is increased and displayed.
*/

/* function CountSecrets() {
  const [secret, setSecret] = useState({ value: "", countSecrets: 0 });

  useEffect(() => {
    if (secret.value === "secret") {
      setSecret((s) => ({ ...s, countSecrets: s.countSecrets + 1 }));
    }
  }, [secret]);

  const onChange = ({ target }) => {
    setSecret((s) => ({ ...s, value: target.value }));
  };

  return (
    <div>
      <input type="text" value={secret.value} onChange={onChange} />
      <div>Number of secrets: {secret.countSecrets}</div>
    </div>
  );
} */

/* 
The problem here is that the useEffect() hook is triggered every time the
secret state changes. But the secret state is an object, and every time the
state is updated, a new object reference is created, and that's why the
effect runs infinitely.

The solution to this problem is to stick with primitives
*/

function CountSecrets() {
  const [secret, setSecret] = useState({ value: "", countSecrets: 0 });

  useEffect(() => {
    if (secret.value === "secret") {
      setSecret((s) => ({ ...s, countSecrets: s.countSecrets + 1 }));
    }
  }, [secret.value]);

  const onChange = ({ target }) => {
    setSecret((s) => ({ ...s, value: target.value }));
  };

  return (
    <div>
      <input type="text" value={secret.value} onChange={onChange} />
      <div>Number of secrets: {secret.countSecrets}</div>
    </div>
  );
}
