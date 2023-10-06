// Object creation -------------------------------------------------------------

const obj1 = {};            // object literal
const obj2 = new Object();  // object constructor

// Literals and properties -----------------------------------------------------

let user = {            // an object
  name: "John",         // by key "name" store value "John"
  age: 30,              // by key "age" store value 30
  "likes birds": true   // multiword property name must be quoted
};

// access properties
user.name;
user["age"];

// add properties
user.newProp = true;
user["newProp2"] = true;

// remove properties
delete user.newProp2;

// computed properties
let fruit = "apple";

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

bag.apple; // 5 if fruit="apple"

// Property existence test and iteration ---------------------------------------

"age" in user; // true, user.age exists
"blabla" in user; // false, user.blabla doesn't exist

for (let key in user) {
  // keys
  key;

  // values for the keys
  user[key]; // John, 30, true
}

// -----------------------------------------------------------------------------
/*
  
  Order in objects

  Are objects ordered? In other words, if we loop over an object, do we get 
  all properties in the same order they were added? Can we rely on this?

  The short answer is: “ordered in a special fashion”: integer properties are 
  sorted, others appear in creation order. The details follow.
  
  - The “integer property” term here means a string that can be converted 
  to-and-from an integer without a change.

*/

// integer properties, sorted
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  "1": "USA"
};

for (let code in codes) {
  code; // 1, 41, 44, 49
}

// non-integer properties are listed in the creation order
let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // add one more

for (let prop in user) {
  prop; // name, surname, age
}