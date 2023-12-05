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
    .then((results) => {
      res.render("index", { title: "All blogs", blogs: results });
    })
    .catch((err) => console.log(err));
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// at the end because is a last resource when no path match the request
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
