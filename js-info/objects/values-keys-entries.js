/* 
  Object.keys, Object.entries, Object.values -----------------------------------

  For plain objects, the following methods are available:
  - Object.keys(obj) – returns an array of keys.
  - Object.values(obj) – returns an array of values.
  - Object.entries(obj) – returns an array of [key, value] pairs.

  Just like a for..in loop, these methods ignore properties that use Symbol(...) 
  as keys. Usually that’s convenient. But if we want symbolic keys too, then 
  there’s a separate method Object.getOwnPropertySymbols that returns an array 
  of only symbolic keys. Also, there exist a method Reflect.ownKeys(obj) that 
  returns all keys.
*/

let user = {
  name: "John",
  age: 30,
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// Transforming objects --------------------------------------------------------

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // convert prices to array, map each key/value pair into another pair
  // and then fromEntries gives back the object
  Object.entries(prices).map((entry) => [entry[0], entry[1] * 2])
);

console.log(prices);
console.log(doublePrices);
