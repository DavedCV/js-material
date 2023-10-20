/* 
useEffect is a mechanism outside the concepts that React usually applies, 
allowing you to sync your component with various external systems like a server, 
API, or browser DOM.
*/

import { useState, useEffect } from "react";

/* // In this case the clock goes crazy
export default function Clock() {
  const [counter, setCounter] = useState(0);

  setInterval(() => {
    setCounter(count => count + 1);
  }, 1000);

  return <p>{counter} seconds have passed.</p>;
} */

/* 
This is where the useEffect hook swoops in to save us. We can wrap this 
calculation inside a useEffect hook to move it outside the rendering calculation. 
It accepts a callback function with all the calculations.
*/

/* export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter(count => count + 1);
    }, 1000);
  });

  return <p>{counter} seconds have passed</p>;
} */

/* 
But, it still keeps growing too fast! This is where another argument of the 
useEffect comes in: the dependency array.


By default, useEffect hook runs on every render. Since setting state tears the 
component down, we still get multiple setter calls on every render, which 
doesn’t help us.

Fortunately, the second argument accepts an array of dependencies allowing the 
hook to re-render only when those dependencies are changed.

We pass an empty array in this example because we do not want the useEffect hook 
to run anytime other than the initial component render.
*/

/* export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);
  }, []);

  return <p>{counter} seconds have passed</p>;
} */

/* 
Notice that every time the useEffect hook runs, a new setInterval is used. When 
the component is unmounted, setInterval is not stopped, it keeps incrementing. 
This unnecessary behavior can be prevented by simply clearing the interval when 
the component is unmounted and that is where the third part of our useEffect 
hook comes in - the cleanup function.

You can return a function from the callback in the useEffect hook, which will 
be executed each time before the next effect is run, and one final time when 
the component is unmounted. In this case, let us clean up the interval with 
a cleanup function.
*/

export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p>{counter} seconds have passed.</p>;
}
