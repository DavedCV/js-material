/* 
The "new Function" syntax ------------------------------------------------------

There’s one more way to create a function. It’s rarely used, but sometimes 
there’s no alternative.

The syntax for creating a function:
let func = new Function ([arg1, arg2, ...argN], functionBody);

The major difference from other ways we’ve seen is that the function is created 
literally from a string, that is passed at run time.
*/

let sum = new Function("a", "b", "return a + b");
console.log(sum(1, 2));

/* 
Closure ----------------------------------------------------------------------- 

When a function is created using new Function, its [[Environment]] is set to 
reference not the current Lexical Environment, but the global one.

So, such function doesn’t have access to outer variables, only to the global ones.

To pass something to a function, created as new Function, we should use its arguments.
*/

function getFunc() {
  let value = "test";

  let func = new Function("console.log(value)");

  return func;
}
getFunc()(); // error: value is not defined

// ---

const globalVar2 = "global var";
function getFunc2() {
  return new Function("console.log(globalVar2)");
}
getFunc2()(); // global var
