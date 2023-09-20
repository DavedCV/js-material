function orderTotal(fetch, apiKeyWrapper, order) {
  const getTotal = () =>
    order.items.reduce(
      (prev, cur) => cur.price * (cur.quantity ?? 1) + prev,
      0,
    );

  if (order.country) {
    return fetch(
      "https://vatapi.com/v1/country-code-check?code=" + order.country,
      {
        headers: {
          apikey: apiKeyWrapper.secret.apikey,
        }
      },
    )
      .then((response) => response.json())
      .then((data) => data.rates.standard.value)
      .then((vat) => getTotal() * (1 + vat / 100));
  }

  return Promise.resolve(getTotal());
}

module.exports = orderTotal;
