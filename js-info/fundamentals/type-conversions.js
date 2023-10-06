// String conversion -----------------------------------------------------------

let value = true;
typeof value; // boolean

value = String(value); // now value is a string "true"
typeof value; // string

// Numeric conversion ----------------------------------------------------------
// Numeric conversion in mathematical functions and expressions happens automatically.

let implicitConversion = "6" / "2"; // 3

let numStringToNum = Number("123"); // becomes a number 123

let nonStringToNum = Number("an arbitrary string instead of a number"); // NaN, conversion failed

let boolToNum = true;
Number(boolToNum) // 1

let nullToNum = null;
Number(nullToNum) // 0

let undefinedToNum = undefined;
Number(undefinedToNum); // NaN

// Boolean conversion ----------------------------------------------------------
// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// Other values become true.

Boolean(1); // true
Boolean(0); // false
Boolean("hello"); // true
Boolean(""); // false