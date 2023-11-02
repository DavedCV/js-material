import { useState } from "react";

/*
Queuing a series of state updates ----------------------------------------------

Setting a state variable will queue another render. But sometimes you might 
want to perform multiple operations on the value before queueing the next 
render. To do this, it helps to understand how React batches state updates.
*/

/* 
React batches state updates ----------------------------------------------------

this code does not update the number by 3, due to the render nature.

Setting a state variable will queue another render. But sometimes you might 
want to perform multiple operations on the value before queueing the next 
render. To do this, it helps to understand how React batches state updates.

This behavior is also known as batching.
*/

/* export default function State() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
    </>
  );
}
 */

/* 
Updating the same state multiple times before the next render  -----------------

It is an uncommon use case, but if you would like to update the same state 
variable multiple times before the next render, instead of passing the next 
state value like setNumber(number + 1), you can pass a function that calculates 
the next state based on the previous one in the queue, like 
setNumber(n => n + 1). It is a way to tell React to “do something with the 
state value” instead of just replacing it.

Here, n => n + 1 is called an updater function. When you pass it to a state setter:
- React queues this function to be processed after all the other code in the 
event handler has run.
- During the next render, React goes through the queue and gives you the final 
updated state.
*/
/* 
export default function State() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
        }}
      >
        +3
      </button>
    </>
  );
} */

// Update state after replacing it ---------------------------------------------

export default function State() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setNumber((n) => n + 1);
        }}
      >
        Increase the number
      </button>
    </>
  );
}
