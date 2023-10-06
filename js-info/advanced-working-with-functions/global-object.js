/*
  Global Object ----------------------------------------------------------------

  The global object provides variables and functions that are available 
  anywhere. By default, those that are built into the language or the environment.

  In a browser it is named window, for Node.js it is global, for other 
  environments it may have another name.

  Recently, globalThis was added to the language, as a standardized name for a 
  global object, that should be supported across all environments. It’s supported 
  in all major browsers.
*/

console.log(globalThis);

// All properties of the global object can be accessed directly-----------------
globalThis.console.log("console log directly accesed through global object");

// Every new variable defined with "var" is added as a property to the global 
//object in a browser
var newVar = "test";
console.log(globalThis.newVar);

/*
  Using for polyfills ----------------------------------------------------------

  We use the global object to test for support of modern language features.

  For instance, test if a built-in Promise object exists (it doesn’t in really 
  old browsers).

  If there’s none (say, we’re in an old browser), we can create “polyfills”: add 
  functions that are not supported by the environment, but exist in the modern standard.
*/

if (!globalThis.Promise) {
  console.log("Your browser is really old!");
}

if (!globalThis.Promise) {
  //window.Promise = ... // custom implementation of the modern language feature
}

