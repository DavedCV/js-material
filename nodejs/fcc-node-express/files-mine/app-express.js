const express = require("express");
const people = require("./routes/people");
const products = require("./routes/products");
const login = require("./routes/auth");

const app = express();

// setup static and middleware  
//app.use(express.static("./public"));
// setup static route middleware to test post requests
app.use(express.static("./methods-public"));
// parse urlencoded form data
app.use(express.urlencoded({ extended: false }));
// parse json data
app.use(express.json());

// use routers to handle request to the different exposed endpoints
app.use("/api/people", people);
app.use("/login", login);
app.use("/api/products", products);

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1><a href='/api/products'>products</a>");
});

app.all("*", (req, res) => {
  res.status(404).send("resource nor found!");
});

app.listen(5000, () => {
  console.log("Server is listening in port 5000...");
});
