// Common Matchers -------------------------------------------------------------
// -----------------------------------------------------------------------------

// Exact equality  -------------------------------------------------------------
// toBe uses Object.is to test exact equality.
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

// Check the value of an object, use toEqual -----------------------------------
// toEqual recursively checks every field of an object or array.
test("object assignment (toEqual)", () => {
  const data = {one: 1};
  data["two"] = 2;
  expect(data).toEqual({one: 1, two: 2});
})

/*his will fail cause there are two differenet object instances
test("object assignment (toBe)", () => {
  const data = {one: 1};
  data["two"] = 2;
  expect(data).toBe({one: 1, two: 2});
})
*/

// Test for the opposite of a matcher using not: -------------------------------
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

/*
  Truthiness ------------------------------------------------------------------
  -----------------------------------------------------------------------------

  In tests, you sometimes need to distinguish between undefined, null, and 
  false, but you sometimes do not want to treat these differently. Jest 
  contains helpers that let you be explicit about what you want:

  - toBeNull matches only null
  - toBeUndefined matches only undefined
  - toBeDefined is the opposite of toBeUndefined
  - toBeTruthy matches anything that an if statement treats as true
  - toBeFalsy matches anything that an if statement treats as false

*/

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// Numbers ---------------------------------------------------------------------
// -----------------------------------------------------------------------------

// Most ways of comparing numbers have matcher equivalents.
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// For floating point equality, use toBeCloseTo instead of toEqual, because 
// you don't want a test to depend on a tiny rounding error.
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);      // This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

// Strings ---------------------------------------------------------------------
// -----------------------------------------------------------------------------

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

// Arrays and iterables --------------------------------------------------------
// -----------------------------------------------------------------------------

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

// Exceptions ------------------------------------------------------------------
// -----------------------------------------------------------------------------

// If you want to test whether a particular function throws an error when it's 
// called, use toThrow.
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}

// The function that throws an exception needs to be invoked within a wrapping 
// function otherwise the toThrow assertion will fail.
test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use a string that must be contained in the error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);

  // Or you can match an exact error message using a regexp like below
  //expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
});