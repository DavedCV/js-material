// Number  ---------------------------------------------------------------------
// ±(2^53-1)

let number = 132;
number = 12.48;

// special numeric values
number = Infinity;
console.log(1 / 0); // Infinity

number = -Infinity;
console.log(-1 / 0); // Infinity

number = NaN;
console.log("not a number" / 2); // NaN, such division is erroneous

// Bigint  ---------------------------------------------------------------------
// arbitrary length

const bigInt = 1234567890123456789012345678901234567890n;

// String ----------------------------------------------------------------------

let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed another ${str}`;

// Boolean ---------------------------------------------------------------------

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
let isGreater = 4 > 1;

// Null ------------------------------------------------------------------------
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

let age = null;

// Undefined -------------------------------------------------------------------
// The meaning of undefined is “value is not assigned”.

let age2; // Undefined

// Object ----------------------------------------------------------------------
// objects are used to store collections of data and more complex entities.
let obj = {};

// typeof operator -------------------------------------------------------------

typeof undefined; // "undefined"

typeof 0; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof "foo"; // "string"

typeof Symbol("id"); // "symbol"

typeof Math; // "object"  (1)

typeof null; // "object"  (2) eror from early versions of js

typeof alert; // "function"  (3) Functions belong to the object type. But typeof treats them differently, returning "function".
