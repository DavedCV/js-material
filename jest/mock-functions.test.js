/* 
  Mock Functions ---------------------------------------------------------------
  ------------------------------------------------------------------------------

  Mock functions allow you to test the links between code by erasing the actual 
  implementation of a function, capturing calls to the function (and the 
  parameters passed in those calls), capturing instances of constructor 
  functions when instantiated with new, and allowing test-time configuration 
  of return values.

  There are two ways to mock functions: Either by creating a mock function to 
  use in test code, or writing a manual mock to override a module dependency.
*/

/* 
  Using a mock function --------------------------------------------------------

  Let's imagine we're testing an implementation of a function forEach, which 
  invokes a callback for each item in a supplied array.

  To test this function, we can use a mock function, and inspect the mock's 
  state to ensure the callback is invoked as expected.
*/

const forEach = require("./forEach");

// create mock function
const mockCallback = jest.fn((x) => 42 + x);

test("forEach mock function", () => {
  forEach([0, 1], mockCallback);

  // The mock function was called twice
  expect(mockCallback.mock.calls).toHaveLength(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
});

/* 
  .mock property ---------------------------------------------------------------

  All mock functions have this special .mock property, which is where data 
  about how the function has been called and what the function returned is kept. 
  The .mock property also tracks the value of this for each call, so it is 
  possible to inspect this as well:

*/

const myMock1 = jest.fn();
const a = new myMock1();
console.log(myMock1.mock.instances);
// > [ <a> ]

const myMock2 = jest.fn();
const b = {};
const bound = myMock2.bind(b);
bound();
console.log(myMock2.mock.contexts);
// > [ <b> ]

// These mock members are very useful in tests to assert how these functions
// get called, instantiated, or what they returned:

test("for Each mock function using mock prop", () => {
  // The function was called exactly twice
  expect(mockCallback.mock.calls).toHaveLength(2);

  // The first arg of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The second arg of the first call to the function was undefined
  expect(mockCallback.mock.calls[0][1]).toBe(undefined);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);

  // The function was called with a certain `this` context: undefined.
  expect(mockCallback.mock.contexts[0]).toBe(undefined);

  // This function was instantiated exactly 2 times
  expect(mockCallback.mock.instances.length).toBe(2);

  // The first argument of the last call to the function was 1
  expect(mockCallback.mock.lastCall[0]).toBe(1);
});

/* 
  Mock return values -----------------------------------------------------------

  Mock functions can also be used to inject test values into your code during a 
  test.

  Mock functions are also very effective in code that uses a functional 
  continuation-passing style. Code written in this style helps avoid the need 
  for complicated stubs that recreate the behavior of the real component 
  they're standing in for, in favor of injecting values directly into the test 
  right before they're used.
*/

const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true

// ----

const filterTestFn = jest.fn();

// Make the mock return `true` for the first call,
// and `false` for the second call
filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

const result = [11, 12].filter(num => filterTestFn(num));

console.log(result);
// > [11]

console.log(filterTestFn.mock.calls[0][0]); // 11
console.log(filterTestFn.mock.calls[1][0]); // 12