/*
  MAP --------------------------------------------------------------------------

  Map is a collection of keyed data items, just like an Object. But the main 
  difference is that Map allows keys of any type.

  Methods and properties are:
  - new Map() – creates the map.
  - map.set(key, value) – stores the value by the key.
  - map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
  - map.has(key) – returns true if the key exists, false otherwise.
  - map.delete(key) – removes the element (the key/value pair) by the key.
  - map.clear() – removes everything from the map.
  - map.size – returns the current element count.
  - map.keys() - returns an iterable of keys
  - map.values() - returns an iterable for values
  - map.entries() - retunrns an iterable for entries [key, value], by def in loops

  When a Map is created, we can pass an array (or another iterable) with key/value pairs 
  for initialization. If we have a plain object, and we’d like to create a Map 
  from it, then we can use built-in method Object.entries(obj) that returns an 
  array of key/value pairs for an object exactly in that format.

  There’s Object.fromEntries method that does the reverse: given an array of 
  [key, value] pairs, it creates an object from them. A call to map.entries() 
  returns an iterable of key/value pairs, exactly in the right format for 
  Object.fromEntries.
*/

let map = new Map();

map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1");

console.log("map.get('1'):", map.get("1"));
console.log("map.get(1):", map.get(1));
console.log("map.size:", map.size);

// map can use objects as keys -------------------------------------------------
let john = { name: "jhon" };
let visitsCountMap = new Map();
visitsCountMap.set(john, 1);
console.log("using object as key:", visitsCountMap.get(john));

// iteration over a map --------------------------------------------------------

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log("key:", vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log("value:", amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) {
  // the same as of recipeMap.entries()
  console.log("entry:", entry); // cucumber,500 (and so on)
}

// Map has a foreach -----------------------------------------------------------

// runs the function for each (key, value) pair
recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`); // cucumber: 500 etc
});

// Object.entries: Map from Object ---------------------------------------------

let obj = {
  name: "John",
  age: 30,
};

let map2 = new Map(Object.entries(obj));

console.log("object.entries:", map2.get("name")); // John

// Object.fromEntries: Object from Map -----------------------------------------

let map3 = new Map();
map.set("banana", 1);
map.set("orange", 2);
map.set("meat", 4);

let obj2 = Object.fromEntries(map2.entries()); // make a plain object (*)
console.log("object.fromEntries:", obj2);
console.log();
/* 
  SET --------------------------------------------------------------------------

  A Set is a special type collection – “set of values” (without keys), where 
  each value may occur only once.

  Its main methods are:
  - new Set([iterable]) – creates the set, and if an iterable object is provided 
  (usually an array), copies values from it into the set.
  - set.add(value) – adds a value, returns the set itself.
  - set.delete(value) – removes the value, returns true if value existed at the 
  moment of the call, otherwise false.
  - set.has(value) – returns true if the value exists in the set, otherwise false.
  - set.clear() – removes everything from the set.
  - set.size – is the elements count.

  The main feature is that repeated calls of set.add(value) with the same value 
  don’t do anything. That’s the reason why each value appears in a Set only once
*/

let set = new Set();

let david = { name: "david" };
let pete = { name: "pete" };
let mary = { name: "mary" };

set.add(david);
set.add(pete);
set.add(mary);
set.add(david);
set.add(pete);
set.add(mary);

console.log("set size:", set.size);

for (let user of set) {
  console.log("user:", user);
}

// iteration over set ----------------------------------------------------------

let set2 = new Set(["oranges", "apples", "bananas"]);

for (let value of set2) console.log("set 2:", value);

// the same with forEach:
set2.forEach((value, valueAgain, set) => {
  console.log("set2 - forEach:", value);
});

// EXERCISES -------------------------------------------------------------------

// Create a function unique(arr) that should return an array with unique items of arr.
function unique(arr) {
  return Array.from(new Set(arr).values());
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // Hare, Krishna, :-O

// Write a function aclean(arr) that returns an array cleaned from anagrams.

function aclean(arr) {
  let map = new Map();

  arr.forEach((word) => {
    let sortedWord = word.toLowerCase().split("").sort().join("");
    map.set(sortedWord, word);
  });

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
