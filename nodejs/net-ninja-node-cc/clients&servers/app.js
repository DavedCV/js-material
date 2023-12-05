const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

const app = express();

// to connect to mongodb
const dbURI =
  "mongodb+srv://davidnode:test1234@nodetuts.irfnmwr.mongodb.net/nodetuts?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// template engine config
app.set("view engine", "ejs");
app.set("views", "clients&servers/views/");

// add static files
app.use(express.static("clients&servers/public"));

// create an object to parse the request
app.use(express.urlencoded({ extended: true }));

// add middleware for logging
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 }) // -1 is descending order
    .then((results) => {
      res.render("index", { title: "All blogs", blogs: results });
    })
    .catch((err) => console.log(err));
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

app.post("/blogs/create", (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => console.log(err));
});

app.get("/blogs/:id", (req, res) => {
  // same name as the one in the route
  const id = req.params.id;

  Blog.findById(id)
    .then((result) => {
      res.render("details", { title: "Blog details", blog: result });
    })
    .catch((err) => console.log(err));
});

app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
});

// at the end because is a last resource when no path match the request
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
