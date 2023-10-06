/*

  Although they are called “logical”, they can be applied to values of any 
  type, not only boolean. Their result can also be of any type.

*/

// || (OR) ---------------------------------------------------------------------

true || true;   // true
false || true;  // true
true || false;  // true
false || false; // false

// OR "||" finds the first truthy value
/*

  The OR || operator does the following:

  - Evaluates operands from left to right.
  - For each operand, converts it to boolean. If the result is true, stops and }
    returns the original value of that operand.
  - If all operands have been evaluated (i.e. all were false), returns the 
    last operand.

*/

1 || 0; // 1 (1 is truthy)

null || 1; // 1 (1 is the first truthy value)
null || 0 || 1; // 1 (the first truthy value)

undefined || null || 0; // 0 (all falsy, returns the last value)

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

firstName || lastName || nickName || "Anonymous"; //SuperCoder

// && (AND) --------------------------------------------------------------------

true && true;   // true
false && true;  // false
true && false;  // false
false && false; // false

// AND “&&” finds the first falsy value
/* 
  The AND && operator does the following:

  - Evaluates operands from left to right.
  - For each operand, converts it to a boolean. If the result is false, stops 
    and returns the original value of that operand.
  - If all operands have been evaluated (i.e. all were truthy), returns the 
    last operand.
*/

// if the first operand is truthy,
// AND returns the second operand:
1 && 0; // 0
1 && 5; // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
null && 5; // null
0 && "no matter what"; // 0

1 && 2 && null && 3; // null

1 && 2 && 3; // 3, the last one


// ! (NOT) ---------------------------------------------------------------------

/* 
  The operator accepts a single argument and does the following:

  - Converts the operand to boolean type: true/false.
  - Returns the inverse value.
*/

!true; // false
!0; // true

// used to convert values to boolean
!!"non-empty string"; // true
!!null; // false

// (??) Nullish coalescing operator --------------------------------------------

/* 
  The result of a ?? b is:

  - if a is defined, then a,
  - if a isn’t defined, then b.
*/

// same as
result = (a !== null && a !== undefined) ? a : b;

// examples
let user;

user ?? "Anonymous"; // Anonymous (user is undefined)

firstName = null;
lastName = null;
nickName = "Supercoder";

// shows the first defined value:
firstName ?? lastName ?? nickName ?? "Anonymous"; // Supercoder

// ?? vs ||
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0