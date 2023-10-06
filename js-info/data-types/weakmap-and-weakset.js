/* 
  Weak Map ---------------------------------------------------------------------

  if we use an object as the key in a regular Map, then while the Map exists, 
  that object exists as well. It occupies memory and may not be garbage collected.
  WeakMap is fundamentally different in this aspect. It doesn’t prevent 
  garbage-collection of key objects.

  The first difference between Map and WeakMap is that keys must be objects, not 
  primitive values. Now, if we use an object as the key in it, and there are no 
  other references to that object – it will be removed from memory (and from 
  the map) automatically.

  WeakMap does not support iteration and methods keys(), values(), entries(), 
  so there’s no way to get all keys or values from it.

  WeakMap has only the following methods:
  - weakMap.set(key, value)
  - weakMap.get(key)
  - weakMap.delete(key)
  - weakMap.has(key)


*/

// object key ------------------------------------------------------------------

let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "ok"); // works fine (object key)

// can't use a string as the key
//weakMap.set("test", "Whoops");

// object reference ------------------------------------------------------------

let john = { name: "John" };
let weakMap2 = new WeakMap();
weakMap2.set(john, "...");

john = null; // overwrite the reference
// john is removed from memory!

/* 
  Weak Set ---------------------------------------------------------------------
  
  WeakSet behaves similarly:

  - It is analogous to Set, but we may only add objects to WeakSet (not primitives).
  - An object exists in the set while it is reachable from somewhere else.
  - Like Set, it supports add, has and delete, but not size, keys() and no iterations.

*/

let visitedSet = new WeakSet();

let david = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(david); // david visited us
visitedSet.add(pete); // Then Petejohn
visitedSet.add(david); // John again

// visitedSet has 2 users now
mary = null;

// check if John visited?
console.log(visitedSet.has(david)); // true

// check if Mary visited?
console.log(visitedSet.has(mary)); // false

david = null;
// visitedSet will be cleaned automatically