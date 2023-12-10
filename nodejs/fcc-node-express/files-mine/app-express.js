const express = require("express");
const path = require("path");
const { products, people } = require("./data");

const app = express();

// setup static and middleware
//app.use(express.static("./public"));
// setup static route middleware to test post requests
app.use(express.static("./methods-public"));
// parse urlencoded form data
app.use(express.urlencoded({ extended: false }));
// parse json data
app.use(express.json());

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

app.get("/api/people", (req, res) => {
  res.status(200).json({ sucess: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;

  if (!name)
    return res
      .status(400)
      .json({ sucess: false, msg: "please provide name value" });

  res.status(201).json({ sucess: true, person: name });
});

app.post("/login", (req, res) => {
  console.log(req.body);

  const { name } = req.body;

  if (!name) return res.status(401).send("Please provide credentials!");

  res.status(200).send(`Welcome ${name}!`);
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!id || !name)
    return res
      .status(400)
      .json({ sucess: false, msg: "should provide an a id and a name" });

  people.map((person) => {
    if (person.id === +id) {
      person.name = name;
    }

    return person;
  });

  res.status(200).json({ sucess: true, data: people });
});

app.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msh: `No person with id: ${req.params.id}` });
  }

  const newPeople = people.filter((person) => person.id !== +req.params.id);
  res.status(200).json({ success: true, data: newPeople });
});

app.all("*", (req, res) => {
  res.status(404).send("resource nor found!");
});

app.listen(5000, () => {
  console.log("Server is listening in port 5000...");
});
