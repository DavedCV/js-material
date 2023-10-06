/* 
  Function Object --------------------------------------------------------------

  As we already know, a function in JavaScript is a value.  
  In JavaScript, functions are of type object.

  A good way to imagine functions is as callable “action objects”. We can not 
  only call them, but also treat them as objects: add/remove properties, pass 
  by reference etc.

*/

// The “name” property ---------------------------------------------------------

function sayHi() {
  //console.log("Hi");
}
console.log("function name property:", sayHi.name);

// In the specification, this feature is called a “contextual name”.
let sayHiExpression = function () {
  //console.log("Hi");
};
console.log("function expression has a name:", sayHiExpression.name); // sayHiExpression (there's a name!)

// The “length” property -------------------------------------------------------
// There is another built-in property “length” that returns the number of
//function parameters

function f1(a) {}
function f2(a, b) {}

console.log("function (f1) length property:", f1.length); // 1
console.log("function (f2) length property:", f2.length); // 2

// Custom properties -----------------------------------------------------------
// We can also add properties of our own.

function sayHiCustomProp() {
  //console.log("Hi");

  // let's count how many times we run
  sayHiCustomProp.counter++;
}
sayHiCustomProp.counter = 0; // initial value

sayHiCustomProp(); // Hi
sayHiCustomProp(); // Hi

console.log(`Called ${sayHiCustomProp.counter} times: using custom properties`); // Called 2 times

// Function properties can replace closures sometimes.
function makeCounter() {
  // instead of:
  // let count = 0

  function counter() {
    return counter.count++;
  }
  counter.count = 0;
  return counter;
}

let counter = makeCounter();
console.log("counter, closure vs custom properties:", counter()); // 0
console.log("counter, closure vs custom properties:", counter()); // 1
counter.count = 10;
console.log("counter, custom properties allow modification:", counter.count);

// Named Function Expression ---------------------------------------------------
// It allows the function to reference itself internally.

let sayHiNamedExpression = function func(who) {
  if (who) console.log("Named function expression:", `Hello, ${who}`);
  else func("Guest");
};
sayHiNamedExpression();

// EXERCISES -------------------------------------------------------------------

/*
  exercise 1

  Modify the code of makeCounter() so that the counter can also decrease 
  and set the number:

  - counter() should return the next number (as before).
  - counter.set(value) should set the counter to value.
  - counter.decrease() should decrease the counter by 1.
*/

function makeCounterExercise1() {
  function counter() {
    return ++counter.count;
  }
  counter.count = 0;
  counter.set = function (value) {
    return (counter.count = value);
  };
  counter.decrease = function () {
    return --counter.count;
  };

  return counter;
}

const ex1Counter = makeCounterExercise1();
console.log("exercise 1 counter calls:", ex1Counter());
console.log("exercise 1 counter calls:", ex1Counter());
console.log("exercise 1 counter decrease:", ex1Counter.decrease());
console.log("exercise 1 counter set to 10:", ex1Counter.set(10));

/*
  exercise 2

  Sum with an arbitrary amount of brackets
*/

function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}

console.log("sum exercise 2:", String(sum(1)(2))); // 3
console.log("sum exercise 2:", String(sum(5)(-1)(2))); // 6
console.log("sum exercise 2:", String(sum(6)(-1)(-2)(-3))); // 0
console.log("sum exercise 2:", String(sum(0)(1)(2)(3)(4)(5))); // 15
