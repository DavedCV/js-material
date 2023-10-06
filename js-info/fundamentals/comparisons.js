/* 

- Comparison operators return a boolean value.
- Strings are compared letter-by-letter in the “dictionary” order.
- When values of different types are compared, they get converted to numbers 
  (with the exclusion of a strict equality check).
- The values null and undefined equal == each other and do not equal 
  any other value.
- Be careful when using comparisons like > or < with variables that can 
  occasionally be null/undefined. Checking for null/undefined separately is 
  a good idea.

*/

// Basic cases -----------------------------------------------------------------

2 > 1;  // true (correct)
2 == 1; // false (wrong)
2 != 1; // true (correct)

// String comparison ----------------------------------------------------------
// Compare by Unicode order

'Z' > 'A'; // true
'Glow' > 'Glee'; // true
'Bee' > 'Be'; // true

// Comparison of different types -----------------------------------------------

// When comparing values of different types, JavaScript converts the values to 
// numbers.
'2' > 1; // true, string '2' becomes a number 2
'01' == 1; // true, string '01' becomes a number 1

// For boolean values, true becomes 1 and false becomes 0.
true == 1; // true
false == 0; // true

// Strict equality -------------------------------------------------------------

// A regular equality check == has a problem. It cannot differentiate 0 from 
// false. This happens because operands of different types are converted 
// to numbers by the equality operator ==. An empty string, just like false, 
// becomes a zero.
0 == false; // true
'' == false; // true

// A strict equality operator === checks the equality without type conversion.
0 === false; // false, because the types are different


// Comparisons with NULL and UNDEFINED -----------------------------------------

// For a strict equality check ===, These values are different, 
// because each of them is a different type.
null === undefined; // false

// For a non-strict check ==
// There’s a special rule. These two are a “sweet couple”: they equal each 
// other (in the sense of ==), but not any other value.
null == undefined; // true

// For maths and other comparisons < > <= >=
// null becomes 0, while undefined becomes NaN.
null > 0;  // (1) false: null becomes 0 and 0 !> 0
null == 0; // (2) false: null is only == to undefined (special rule)
null >= 0; // (3) true: null becomes 0 and 0 >= 0

// The value undefined shouldn’t be compared to other values:
undefined > 0; // false (1): undefined becomes NaN
undefined < 0; // false (2): undefined becomes NaN 
undefined == 0; // false (3): undefined only == null
