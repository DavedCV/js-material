/*
  Rest parameters "..." -------------------------------------------------------
  -----------------------------------------------------------------------------

  A function can be called with any number of arguments, no matter how it is defined.
  The rest parameters must be at the end.
*/

function sumAll(...args) {
  // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

console.log("sum all:", sumAll(1)); // 1
console.log("sum all:", sumAll(1, 2)); // 3
console.log("sum all:", sumAll(1, 2, 3)); // 6

function showName(firstName, lastName, ...titles) {
  console.log("Show name:", firstName + " " + lastName); // Julius Caesar
  console.log(titles);
}

showName("Julius", "Caesar", "Consul", "Imperator");

/*
  Arguments variable ----------------------------------------------------------
 
  In old times, rest parameters did not exist in the language, and using arguments 
  was the only way to get all arguments of the function. And it still works, we 
  can find it in the old code.

  But the downside is that although arguments is both array-like and iterable, 
  it’s not an array. It does not support array methods, so we can’t call 
  arguments.map(...) for example.

  Also, it always contains all arguments. We can’t capture them partially, 
  like we did with rest parameters.

  - Arrow functions do not have "arguments"

*/

function showNameArg() {
  console.log("arguments var:", arguments);
  console.log("arguments var length:", arguments.length);

  // it's iterable
  // for(let arg of arguments) alert(arg);
}

// shows: 2, Julius, Caesar
showNameArg("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showNameArg("Ilya");
console.log();

/*
  Spread syntax ---------------------------------------------------------------
  -----------------------------------------------------------------------------

  When ...arr is used in the function call, it “expands” an iterable object 
  arr into the list of arguments.

  The spread syntax internally uses iterators to gather elements, the same way 
  as for..of does.

*/

let arr = [3, 5, 1];
console.log("spread syntax: ", Math.max(...arr)); // 5 (spread turns array into a list of arguments)

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log(
  "spread syntax with multiple iterables:",
  Math.max(...arr1, ...arr2)
); // 8

console.log(
  "spread syntax with combined values:",
  Math.max(1, ...arr1, 2, ...arr2, 25)
); // 25

let merged = [0, ...arr, 2, ...arr2];
console.log("spread syntax for merging arrays:", merged);

let str = "Hello";
console.log("spread syntax with iterable:", [...str]); // H,e,l,l,o

// copy an array / object ------------------------------------------------------

// array -----------------------------------------------------------------------

let arrayToCopy = [1, 2, 3];

let arrCopy = [...arrayToCopy]; // spread the array into a list of parameters
// then put the result into a new array

// do the arrays have the same contents?
console.log(
  "copy array same contents:",
  JSON.stringify(arrayToCopy) === JSON.stringify(arrCopy)
); // true

// are the arrays equal?
console.log("copy array ref equality:", arrayToCopy === arrCopy); // false (not same reference)

// modifying our initial array does not modify the copy:
arrayToCopy.push(4);
console.log("original array modified:", arrayToCopy); // 1, 2, 3, 4
console.log("copy:", arrCopy); // 1, 2, 3

// object ----------------------------------------------------------------------

let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj }; // spread the object into a list of parameters
// then return the result in a new object

// do the objects have the same contents?
console.log(
  "copy object same content:",
  JSON.stringify(obj) === JSON.stringify(objCopy)
); // true

// are the objects equal?
console.log("copy object same ref", obj === objCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
obj.d = 4;
console.log("original object modified:", JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
console.log("copy object:", JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}
