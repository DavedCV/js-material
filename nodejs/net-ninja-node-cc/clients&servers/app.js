const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoute");

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

// base route
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

// about route
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// use the blog routes
app.use(blogRoutes);

// at the end because is a last resource when no path match the request
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
