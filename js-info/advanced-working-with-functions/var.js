/* 
  “var” has no block scope -----------------------------------------------------
  
  Variables, declared with var, are either function-scoped or global-scoped. 
  They are visible through blocks.
*/

// var globally scoped ---------------------------------------------------------
if (true) {
  var testVar = true;
}
console.log("var is globally scoped in this case:", testVar);

// let is block scoped ---------------------------------------------------------
if (true) {
  let testLet = true;
  console.log("let is block scoped to the conditional:", testLet);
}

// var is function scoped ------------------------------------------------------
function sayHi() {
  if (true) {
    var phrase = "hello";
  }

  console.log("in a function, var is function scoped:", phrase);
}
sayHi();

// var allows redeclarations ---------------------------------------------------

var user = "david";
var user = "liz";

// var declaration is hoisted --------------------------------------------------

function sayHi2() {
  phrase = "Hello";

  console.log("var is hoisted:", phrase);

  var phrase;
}
sayHi2();

function sayHi3() {
  phrase = "Hello"; // (*)

  if (false) {
    var phrase;
  }

  console.log("var is hoisted:", phrase);
}
sayHi3();

/*
  IIFE to have private context ------------------------------------------------

  Here, a Function Expression is created and immediately called. So the code 
  executes right away and has its own private variables.

  the parentheses around the function is a trick to show JavaScript that the 
  function is created in the context of another expression, and hence it’s a 
  Function Expression: it needs no name and can be called immediately.
*/

(function () {
  var message = "Hello";

  console.log("Inside IIFE:", message); // Hello
})();
