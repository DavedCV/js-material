// boolean conversion ----------------------------------------------------------

/* 

  The if (…) statement evaluates the expression in its parentheses and
  converts the result to a boolean.

  - A number 0, an empty string "", null, undefined, and NaN all become 
  false. Because of that they are called “falsy” values.

  - Other values become true, so they are called “truthy”.

*/

if (0) {
  // 0 is falsy
}

if (1) {
  // 1 is truthy
}

let cond = year == 2015; // equality evaluates to true or false

if (cond) {
}
