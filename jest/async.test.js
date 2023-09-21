// Testing Asynchronous Code ---------------------------------------------------

const fetchData = require("./fetch");

// Promises --------------------------------------------------------------------
// -----------------------------------------------------------------------------

// Return a promise from your test, and Jest will wait for that promise to
// resolve. If the promise is rejected, the test will fail.

test("the data is peanut butter", () => {
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});

test("the data is not other string", () => {
  return fetchData().then((data) => {
    expect(data).not.toBe("bcwvcw");
  });
});

// Async / Await ---------------------------------------------------------------
// -----------------------------------------------------------------------------

// Alternatively, you can use async and await in your tests. To write an
// async test, use the async keyword in front of the function passed to test.
// For example, the same fetchData scenario can be tested with:

test("the data is peanut butter", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

// You can combine async and await with .resolves or .rejects.
test("the data is peanut butter", async () => {
  await expect(fetchData()).resolves.toBe("peanut butter");
});

/*
test("the fetch fails with an error", async () => {
  await expect(fetchData()).rejects.toMatch("error");
});
*/

// .resolves / .rejects --------------------------------------------------------

// You can also use the .resolves matcher in your expect statement, and Jest 
// will wait for that promise to resolve. If the promise is rejected, the test 
// will automatically fail.
test('the data is peanut butter', () => {
  return expect(fetchData()).resolves.toBe('peanut butter');
});

// If you expect a promise to be rejected, use the .rejects matcher. It works 
// analogically to the .resolves matcher. If the promise is fulfilled, the test 
// will automatically fail.

/*
test('the fetch fails with an error', () => {
  return expect(fetchData()).rejects.toMatch('error');
});
*/