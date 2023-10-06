// Ways to write a number ------------------------------------------------------

let billion;
billion = 1000000000;
billion = 1_000_000_000;
billion = 1e9;

1.23e6 === 1.23 * 1000000;

let mсs;
mсs = 0.000001;
mcs = 1e-6;

1.23e-6 === 1.23 / 1000000;

// hex, binary and octal numbers -----------------------------------------------

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255
let c = 0xff; // hex form of 255

console.log(a === b);
console.log(b === c);

// toSting(base) ---------------------------------------------------------------

let num = 255;

console.log(num.toString(16)); // ff
console.log(num.toString(2)); // 11111111

// Rounding --------------------------------------------------------------------

/* 
  - Math.floor: Rounds down
  - Math.ceil: Rounds up
  - Math.round: Rounds to the nearest integer
  - Math.trunc: Removes anything after the decimal point without rounding
  - toFixed(n): Rounds the number to n digits after the point and returns a 
  string representation of the result.

*/

// Imprecise calculations ------------------------------------------------------

console.log(0.1 + 0.2 == 0.3);
console.log(0.1 + 0.2);
console.log(1/10);
console.log((1/10).toFixed(20));

// Tests: isFinite and isNaN ---------------------------------------------------

// - isNaN(value) converts its argument to a number and then tests it
//for being NaN:

console.log(isNaN(NaN)); // true
console.log(isNaN("str")); // true

// - isFinite(value) converts its argument to a number and returns true if
// it’s a regular number, not NaN/Infinity/-Infinity:

console.log(isFinite("15")); // true
console.log(isFinite("str")); // false, because a special value: NaN
console.log(isFinite(Infinity)); // false, because a special value: Infinity

// parseInt and parseFloat -----------------------------------------------------
// The parseInt() function has an optional second parameter. It specifies 
// the base of the numeral system, so parseInt can also parse strings of 
// hex numbers, binary numbers and so on:

console.log(parseInt("100px")); // 100
console.log(parseFloat("12.5em")); // 12.5

console.log(parseInt("12.3")); // 12, only the integer part is returned
console.log(parseFloat("12.3.4")); // 12.3, the second point stops the reading

console.log( parseInt('a123') ); // NaN, the first symbol stops the process

/* 
  Other math functions --------------------------------------------------------

  - Math.random(): Returns a random number from 0 to 1 (not including 1).
  - Math.max(a, b, c...) and Math.min(a, b, c...): Returns the greatest and 
  smallest from the arbitrary number of arguments.
  - Math.pow(n, power): Returns n raised to the given power.

*/