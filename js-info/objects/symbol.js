/* 
  Symbol ------------------------------------------------------------------------

  By specification, only two primitive types may serve as object property keys:
  - String
  - Symbol type

  A “symbol” represents a unique identifier. Symbols are guaranteed to be unique.

  Symbols allow us to create “hidden” properties of an object, that no other 
  part of code can accidentally access or overwrite. Symbols cannot be accessed 
  accidentally

  Technically, symbols are not 100% hidden. There is a built-in 
  method Object.getOwnPropertySymbols(obj) that allows us to get all symbols. 
  Also there is a method named Reflect.ownKeys(obj) that returns all keys of an 
  object including symbolic ones. But most libraries, built-in functions and 
  syntax constructs don’t use these methods.

*/

// Symbol creation -------------------------------------------------------------

let id = Symbol();
console.log(id);

// we can give a symbol a description mostly for debugging purposes
let idWithDescription = Symbol("id");
console.log("Symbol description:", idWithDescription.description);

// Unique Symbols --------------------------------------------------------------

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log("id1 = id2", id1 == id2); // false

// hidden properties on objects ------------------------------------------------

let user = {
  name: "John",
};
user[id] = 1;
console.log("access object propertie using symbol:", user[id]); // we can access the data using the symbol as the key

// Symbols in an object literal ------------------------------------------------

let idLiteral = Symbol("id");

let user2 = {
  name: "Jhon",
  [idLiteral]: 123,
};

// Symbols are skipped by for…in -----------------------------------------------
// Object.keys() also skip Symbols

console.log("Properties user2: ");
for (let key in user2) console.log(key); // name, no symbol

/*
  Global symbol ----------------------------------------------------------------

  As we’ve seen, usually all symbols are different, even if they have the same 
  name. But sometimes we want same-named symbols to be same entities. For 
  instance, different parts of our application want to access symbol "id" 
  meaning exactly the same property.

  To achieve that, there exists a global symbol registry. We can create symbols 
  in it and access them later, and it guarantees that repeated accesses by the 
  same name return exactly the same symbol.

  In order to read (create if absent) a symbol from the registry, 
  use Symbol.for(key).

*/

let idGlobal = Symbol.for("id"); // if the symbol did not exist, it is created
let idAgain = Symbol.for("id");
console.log("Same global symbol:", idGlobal === idAgain); // true

// get id from global symbol reference
// get name by symbol

console.log("description by ref:", Symbol.keyFor(idGlobal)); // id

/*
  System symbols --------------------------------------------------------------

  - There exist many “system” symbols that JavaScript uses internally, and we 
  can use them to fine-tune various aspects of our objects.

*/
