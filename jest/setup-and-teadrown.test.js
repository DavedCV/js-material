/* 
  Setup and Teardown -----------------------------------------------------------
  ------------------------------------------------------------------------------
  
  Often while writing tests you have some setup work that needs to happen 
  before tests run, and you have some finishing work that needs to happen 
  after tests run. Jest provides helper functions to handle this.

*/

/*
  repeating setup --------------------------------------------------------------

  If you have some work you need to do repeatedly for many tests, you can use 
  beforeEach and afterEach hooks.

  For example, let's say that several tests interact with a database of cities. 
  You have a method initializeCityDatabase() that must be called before each 
  of these tests, and a method clearCityDatabase() that must be called after 
  each of these tests. You can do this with:

  beforeEach and afterEach can handle asynchronous code in the same ways that 
  tests can handle asynchronous code - they can either take a done parameter or 
  return a promise. 
*/

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

/* 
  one time setup ---------------------------------------------------------------

  In some cases, you only need to do setup once, at the beginning of a file. 
  This can be especially bothersome when the setup is asynchronous, so you can't 
  do it inline. Jest provides beforeAll and afterAll hooks to handle this situation.

  For example, if both initializeCityDatabase() and clearCityDatabase() 
  returned promises, and the city database could be reused between tests, we 
  could change our test code to:
*/

beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

/* 
  scoping ----------------------------------------------------------------------

  The top level before* and after* hooks apply to every test in a file. The 
  hooks declared inside a describe block apply only to the tests within that 
  describe block.

*/

beforeAll(() => console.log("1 - beforeAll"));
afterAll(() => console.log("1 - afterAll"));
beforeEach(() => console.log("1 - beforeEach"));
afterEach(() => console.log("1 - afterEach"));

test("", () => console.log("1 - test"));

describe("Scoped / Nested block", () => {
  beforeAll(() => console.log("2 - beforeAll"));
  afterAll(() => console.log("2 - afterAll"));
  beforeEach(() => console.log("2 - beforeEach"));
  afterEach(() => console.log("2 - afterEach"));

  test("", () => console.log("2 - test"));
});

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll

/* 
  General Advice ---------------------------------------------------------------

  If a test is failing, one of the first things to check should be whether 
  the test is failing when it's the only test that runs. To run only one test 
  with Jest, temporarily change that test command to a test.only:

  If you have a test that often fails when it's run as part of a larger 
  suite, but doesn't fail when you run it alone, it's a good bet that something 
  from a different test is interfering with this one. You can often fix this 
  by clearing some shared state with beforeEach. If you're not sure whether 
  some shared state is being modified, you can also try a beforeEach that 
  logs data.
*/

test.only("this will be the only test that runs", () => {
  expect(true).toBe(false);
});

test("this test will not run", () => {
  expect("A").toBe("A");
});
