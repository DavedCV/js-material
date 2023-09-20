const fetch = require("node-fetch");
const orderTotal = require("./orderTotal");


// using a real api thi code should work with the
// implemented and tested orderTotal function
const result = orderTotal(fetch, realApiKeyWrapper, {
  country: "DE",
  items: [{ name: "Dragon Waffles", price: 20, quantity: 2 }],
});

/*
const result =
  fetch('https://vatapi.com/v1/country-code-check?code=DE', {
    headers: {
      'apikey': process.env.VAT_API_KEY
    }
  })
  .then(response => response.json())
  .then(data => data.rates.standard.value)
*/
