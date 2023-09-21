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

myMock.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true

// ----

const filterTestFn = jest.fn();

// Make the mock return `true` for the first call,
// and `false` for the second call
filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

const result = [11, 12].filter((num) => filterTestFn(num));

console.log(result);
// > [11]

console.log(filterTestFn.mock.calls[0][0]); // 11
console.log(filterTestFn.mock.calls[1][0]); // 12

/* 
  Mocking modules --------------------------------------------------------------

  Suppose we have a class that fetches users from our API. The class uses axios 
  to call the API then returns the data attribute which contains all the users.

  Now, in order to test this method without actually hitting the API (and thus 
  creating slow and fragile tests), we can use the jest.mock(...) function to 
  automatically mock the axios module.

  Once we mock the module we can provide a mockResolvedValue for .get that 
  returns the data we want our test to assert against. In effect, we are 
  saying that we want axios.get('/users.json') to return a fake response.

*/

const axios = require("axios");

class Users {
  static all() {
    return axios.get("/users.json").then((resp) => resp.data);
  }
}

jest.mock("axios");

test("should fetch users", () => {
  const users = [{ name: "Bob" }];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp);

  return Users.all().then((data) => expect(data).toEqual(users));
});

/* 
  Mock Implementations ---------------------------------------------------------

  Still, there are cases where it's useful to go beyond the ability to specify 
  return values and full-on replace the implementation of a mock function. This 
  can be done with jest.fn or the mockImplementationOnce method on mock functions.

  The mockImplementation method is useful when you need to define the default
  implementation of a mock function that is created from another module.

  When you need to recreate a complex behavior of a mock function such that
  multiple function calls produce different results, use the 
  mockImplementationOnce method.
*/

const myMockFn = jest.fn((cb) => cb(null, true));
myMockFn((err, val) => console.log(val));

// --

jest.mock("./foo");
const foo = require("./foo");

foo.mockImplementation(() => console.log("Mocked foo imported function"));
foo();

// --

const myMockFnMult = jest
  .fn()
  .mockImplementationOnce((cb) => cb(null, true))
  .mockImplementationOnce((cb) => cb(null, false));

myMockFnMult((err, val) => console.log(val));
// > true

myMockFnMult((err, val) => console.log(val));
// > false

const myMockFnMult2 = jest
  .fn(() => "default")
  .mockImplementationOnce(() => "first call")
  .mockImplementationOnce(() => "second call");

console.log(myMockFnMult2(), myMockFnMult2(), myMockFnMult2(), myMockFnMult2());
// > 'first call', 'second call', 'default', 'default'

/* 
  Mock Names -------------------------------------------------------------------

  You can optionally provide a name for your mock functions, which will be 
  displayed instead of 'jest.fn()' in the test error output. Use .mockName() 
  if you want to be able to quickly identify the mock function reporting an 
  error in your test output.
*/

const myMockFnName = jest
  .fn()
  .mockReturnValue("default")
  .mockImplementation((scalar) => 42 + scalar)
  .mockName("add42");

console.log(myMockFnName(1));

/* 
  Custom Matchers --------------------------------------------------------------
*/

// The mock function was called at least once
test("custom matchers mock fn", () => {
  expect(myMockFnName).toHaveBeenCalled();

  // The mock function was called at least once with the specified args
  expect(myMockFnName).toHaveBeenCalledWith(1);

  // The last call to the mock function was called with the specified args
  expect(myMockFnName).toHaveBeenLastCalledWith(1);
});
