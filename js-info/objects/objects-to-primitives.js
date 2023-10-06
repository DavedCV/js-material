/* 

  CONVERSION RULES -------------------------------------------------------------

  1 - There’s no conversion to boolean. All objects are true in a boolean 
  context, as simple as that. There exist only numeric and string conversions.

  2 - The numeric conversion happens when we subtract objects or apply
  mathematical functions. For instance, Date objects can be subtracted, 
  and the result of date1 - date2 is the time difference between two dates.

  3 - As for the string conversion – it usually happens when we output an object 
  with alert(obj) and in similar contexts.

  -- We can implement string and numeric conversion by ourselves, 
  using special object methods.
*/

/* 
  HINTS ------------------------------------------------------------------------

  How does JavaScript decide which conversion to apply?

  - STRING: For an object-to-string conversion, when we’re doing an operation 
  on an object that expects a string

  - NUMBER: For an object-to-number conversion, like when we’re doing maths.
  
  -DEFAULT: Occurs in rare cases when the operator is “not sure” what type to 
  expect.

  For instance, binary plus + can work both with strings (concatenates them) 
  and numbers (adds them). So if a binary plus gets an object as an argument, 
  it uses the "default" hint to convert it.

*/

/*
  To do the conversion, JavaScript tries to 
  find and call three object methods -------------------------------------------

  1 - Call obj[Symbol.toPrimitive](hint) – the method with the symbolic 
  key Symbol.toPrimitive (system symbol), if such method exists,

  2 - Otherwise if hint is "string": try calling obj.toString() or 
  obj.valueOf(), whatever exists.

  3 - Otherwise if hint is "number" or "default"
  try calling obj.valueOf() or obj.toString(), whatever exists.

*/

/* 
  Symbol.toPrimitive -----------------------------------------------------------
  
  obj[Symbol.toPrimitive] = function(hint) {
    // here goes the code to convert this object to a primitive
    // it must return a primitive value
    // hint = one of "string", "number", "default"
  };
*/

let user =  {
  name: "Jhon",
  money: 1000,
  [Symbol.toPrimitive](hint) {
    console.log(`Hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// console.log(String(user));        // hint: string
// console.log(+user);               // hint: number
// console.log(user + 500);          // hint: default

/* 
  toString/valueOf -------------------------------------------------------------

  If there’s no Symbol.toPrimitive then JavaScript tries to find methods 
  toString and valueOf:

  - For the "string" hint: call toString method, and if it doesn’t exist or if 
  it returns an object instead of a primitive value, then call valueOf 
  (so toString has the priority for string conversions).

  - For other hints: call valueOf, and if it doesn’t exist or if it returns an 
  object instead of a primitive value, then call toString 
  (so valueOf has the priority for maths).

  These methods must return a primitive value. If toString or valueOf 
  returns an object, then it’s ignored (same as if there were no method).

  By default, a plain object has following toString and valueOf methods:
  - The toString method returns a string "[object Object]".
  - The valueOf method returns the object itself.
*/

let user2 = {name: "John"};

// console.log(String(user2));                 // [object Object]
// console.log(user2.valueOf() === user2);     // object reference

let user3 = {
  name: "John",
  money: 1000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  }

};

// console.log(String(user3));   // toString -> {name: "John"}
// console.log(+user3);          // valueOf -> 1000
// console.log(user3 + 500);     // valueOf -> 1500