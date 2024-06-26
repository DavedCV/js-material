const Blog = require("../models/blog");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 }) // -1 is descending order
    .then((results) => {
      res.render("index", { title: "All blogs", blogs: results });
    })
    .catch((err) => console.log(err));
};

const blog_create_get = (req, res) => {
  res.render("create", { title: "Create a new blog" });
};

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => console.log(err));
};

const blog_details = (req, res) => {
  // same name as the one in the route
  const id = req.params.id;

  Blog.findById(id)
    .then((result) => {
      res.render("details", { title: "Blog details", blog: result });
    })
    .catch((err) => res.status("404").render("404", { title: "Blog not found" }));
};

const blog_delete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  blog_index,
  blog_create_get,
  blog_create_post,
  blog_details,
  blog_delete,
};
