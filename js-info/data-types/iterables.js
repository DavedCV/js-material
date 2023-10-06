/* 
  Iterables --------------------------------------------------------------------

  Iterable objects are a generalization of arrays. That’s a concept that allows 
  us to make any object useable in a for..of loop.

  If an object isn’t technically an array, but represents a collection 
  (list, set) of something, then for..of is a great syntax to loop over it, 
  so let’s see how to make it work.

*/

/*
  Symbol.iterator --------------------------------------------------------------

  To make the range object iterable (and thus let for..of work) we need to 
  add a method to the object named Symbol.iterator (a special built-in symbol 
  just for that).

  - When for..of starts, it calls that method once (or errors if not found). The 
  method must return an iterator – an object with the method next.
  - Onward, for..of works only with that returned object.
  - When for..of wants the next value, it calls next() on that object.
  - The result of next() must have the form {done: Boolean, value: any}, where 
  done=true means that the loop is finished, otherwise value is the next value.

*/

let range = {
  from: 1,
  to: 5,
};

// 1. call to for..of initially calls this
range[Symbol.iterator] = function () {
  // ...it returns the iterator object:
  // 2. Onward, for..of works only with the iterator object below, asking it for next values
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

// now it works!
for (let num of range) {
  console.log(num); // 1, then 2, 3, 4, 5
}

// Calling an iterator explicitly ----------------------------------------------

let str = "Hello";

// does the same as
// for (let char of str) console.log(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // outputs characters one by one
}

/*
  Iterables and array-likes ---------------------------------------------------

  Two official terms look similar, but are very different.

  - Iterables are objects that implement the Symbol.iterator method, as 
  described above.
  - Array-likes are objects that have indexes and length, so they look like 
  arrays.

  Both iterables and array-likes are usually not arrays, they don’t have push, 
  pop etc. That’s rather inconvenient if we have such an object and want to 
  work with it as with an array. E.g. we would like to work with range using 
  array methods. How to achieve that?

  Array.from -------------------------------------------------------------------

  There’s a universal method Array.from that takes an iterable or array-like 
  value and makes a “real” Array from it. Then we can call array methods on it.

  The optional second argument mapFn can be a function that will be applied to 
  each element before adding it to the array, and thisArg allows us to set this 
  for it.

*/

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2,
};

let arr = Array.from(arrayLike); // (*)
console.log(arr.pop()); // World (method works)

// assuming that range is taken from the example above
let arr2 = Array.from(range);
console.log(arr2); // 1,2,3,4,5 (array toString conversion works)

// example
let randint = (min, max) => Math.floor(Math.random() * (min - max + 1)) + min;

createRandomArray = {
  min: -1,
  max: 90,
  length: 100,
};

createRandomArray[Symbol.iterator] = function () {
  return {
    start: 0,
    min: this.min,
    max: this.max,
    length: this.length,

    next() {
      this.start++;
      return this.start < this.length
        ? { done: false, value: randint(this.min, this.max) }
        : { done: true };
    },
  };
};

let array = Array.from(createRandomArray);
console.log(array);
