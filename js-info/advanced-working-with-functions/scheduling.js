/*
We may decide to execute a function not right now, but at a certain time later. 
That’s called “scheduling a call”.

There are two methods for it:
- setTimeout allows us to run a function once after the interval of time.
- setInterval allows us to run a function repeatedly, starting after the 
interval of time, then repeating continuously at that interval.

These methods are not a part of JavaScript specification. But most environments 
have the internal scheduler and provide these methods. In particular, they are 
supported in all browsers and Node.js.
*/

/* 
setTimeout ---------------------------------------------------------------------
--------------------------------------------------------------------------------
*/

/* // function without parameters
function sayHi() {
  console.log("Hi");
}

// execute the function sayHi after 2000ms == 2sg
setTimeout(sayHi, 2000);

// function with parameters
function sayHiWithParams(name, phrase) {
  console.log(`${phrase}, ${name}!`);
}

// execute the function, after 4000ms and with the parameters ...
setTimeout(sayHiWithParams, 5000, "David", "Hello");
 */
/*
Canceling with clearTimeout -------------------------------------------------
A call to setTimeout returns a “timer identifier” timerId that we can use to 
cancel the execution.
*/

/* const timerId = setTimeout(sayHiWithParams, 5000, "David", "Hello");
clearTimeout(timerId); */

/* 
setInterval --------------------------------------------------------------------
--------------------------------------------------------------------------------

The setInterval method has the same syntax as setTimeout.
*/

/* // repeat with the interval of 2 seconds
const intervalTimerId = setInterval(() => console.log("tick"), 2000);

// after 5 seconds stop
setTimeout(() => {
  clearInterval(intervalTimerId);
  console.log("stop");
}, 6500); */

/* 
nested setTiemout --------------------------------------------------------------
--------------------------------------------------------------------------------

The nested setTimeout is a more flexible method than setInterval. This way the 
next call may be scheduled differently, depending on the results of the current 
one.

Nested setTimeout allows to set the delay between the executions more precisely 
than setInterval.
*/

/* let nestedTimerId = setTimeout(function tick() {
  console.log("tick internal");
  nestedTimerId = setTimeout(tick, 2000); // (*)
}, 2000);
 */

// nestedSetTimeout vs SetInterval

/* function test(i) {
  let counter = 1;
  for (let j = 1; j <= i; j++) {
    counter += j;
  }

  console.log(
    `Counter: ${counter}, Timestamp: ${new Date().toLocaleTimeString()}`
  );
}

let iInterval = 1;
setInterval(() => {
  console.log("INTERVAL: ");
  test(iInterval++);
}, 1000);

let iTimeout = 1;
setTimeout(function run() {
  console.log("Timeout: ");
  test(iTimeout++);
  setTimeout(run, 1000);
}, 1000); */

/* 
zero delay setTimeout ----------------------------------------------------------

Zero delay scheduling with setTimeout(func, 0) (the same as setTimeout(func)) is 
used to schedule the call “as soon as possible, but after the current script is 
complete”.

The browser limits the minimal delay for five or more nested calls of setTimeout
or for setInterval (after 5th call) to 4ms. That’s for historical reasons.

*/

setTimeout(() => console.log("World"));

console.log("Hello");
