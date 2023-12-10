const express = require("express");
const path = require("path");
const { products } = require("./data");

const app = express();

// allow responses to static files
// setup static and middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1><a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
  res.json(
    products.map((prod) => {
      const { id, name, image } = prod;
      return { id, name, image };
    })
  );
});

app.get("/api/products/:id", (req, res) => {
  const singleProduct = products.find(
    (product) => product.id == Number(req.params.id)
  );

  if (!singleProduct) return res.status(404).send("product does not exist");

  res.json(singleProduct);
});

app.get("/api/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((prod) =>
      prod.name.startsWith(search)
    );
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, +limit);
  }

  if (sortedProducts.length < 1) {
    res.status(200).json({ sucess: true, data: [] });
  }

  res.status(200).json(sortedProducts);
});

app.all("*", (req, res) => {
  res.status(404).send("resource nor found!");
});

app.listen(5000, () => {
  console.log("Server is listening in port 5000...");
});
