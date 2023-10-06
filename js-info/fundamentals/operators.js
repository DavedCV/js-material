// modulo ----------------------------------------------------------------------

5 % 2; // 1, the remainder of 5 divided by 2
8 % 3; // 2, the remainder of 8 divided by 3
8 % 4; // 0, the remainder of 8 divided by 4

// exponentiation --------------------------------------------------------------

2 ** 2; // 2² = 4
2 ** 3; // 2³ = 8
2 ** 4; // 2⁴ = 16
4 ** (1 / 2); // 2 (power of 1/2 is the same as a square root)
8 ** (1 / 3); // 2 (power of 1/3 is the same as a cubic root)

// String concatenation --------------------------------------------------------

"my" + "string"; //mystring
"1" + 2; // "12"
2 + "1"; // "21"
2 + 2 + "1"; // "41" and not "221"
"1" + 2 + 2; // "122" and not "14"

// Numeric conversion, unary + -------------------------------------------------

// No effect on numbers
let x = 1;
+x; // 1

let y = -2;
+y; // -2

// Converts non-numbers
+true; // 1
+""; // 0

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
+apples + +oranges; // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

// Assignment, returns a value -------------------------------------------------

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

a; // 3
c; // 0

// Comma -----------------------------------------------------------------------

/* 
  The comma operator , is one of the rarest and most unusual operators. 

  The comma operator allows us to evaluate several expressions, dividing them 
  with a comma ,. Each of them is evaluated but only the result of the last one 
  is returned.
*/

let commaTest = (1 + 2, 3 + 4);

commaTest; // 7 (the result of 3 + 4)

// three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++) {}

// Examples --------------------------------------------------------------------

"" + 1 + 0;       // "10"
"" - 1 + 0;       // -1
true + false;     // 1
6 / "3";          // 2
"2" * "3";        // 6 
4 + 5 + "px";     // "9px"
"$" + 4 + 5;      // "$45"
"4" - 2;          // 2
"4px" - 2;        // NaN
"  -9  " + 5;     // "  -9   5"
"  -9  " - 5;     // -14
null + 1          // 1
undefined + 1     // NaN
" \t \n" - 2      // -2