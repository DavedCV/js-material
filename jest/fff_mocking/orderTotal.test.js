const orderTotal = require("./orderTotal");

it("calls vatapi.com correctly", () => {
  // use mock function with jest native support
  const fakeFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          rates: {
            standard: {
              value: 19,
            },
          },
        }),
    }),
  );

  const fakeApiKeyWrapper = {
    secret: {
      apikey: "key123",
    },
  };

  return orderTotal(fakeFetch, fakeApiKeyWrapper, {
    country: "DE",
    items: [{ name: "Dragon Waffles", price: 20, quantity: 2 }],
  }).then((result) => {
    expect(result).toBe(20 * 2 * 1.19);

    // after the mock function call test the url and key
    expect(fakeFetch).toBeCalledWith(
      "https://vatapi.com/v1/country-code-check?code=DE",
      { headers: { apikey: "key123" } },
    );
  });
});

it("Quantity", () =>
  orderTotal(null, null, {
    items: [{ name: "Dragon candy", price: 2, quantity: 3 }],
  }).then((result) => expect(result).toBe(6)));

it("No quantity specified", () =>
  orderTotal(null, null, {
    items: [{ name: "Dragon candy", price: 3 }],
  }).then((result) => expect(result).toBe(3)));

it("Happy path (Example 1)", () =>
  orderTotal(null, null, {
    items: [
      { name: "Dragon food", price: 8, quantity: 1 },
      { name: "Dragon cage (small)", price: 800, quantity: 1 },
    ],
  }).then((result) => expect(result).toBe(808)));

it("Happy path (Example 2)", () =>
  orderTotal(null, null, {
    items: [
      { name: "Dragon collar", price: 20, quantity: 1 },
      { name: "Dragon chew toy", price: 40, quantity: 1 },
    ],
  }).then((result) => expect(result).toBe(60)));
