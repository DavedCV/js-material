const express = require("express");
const controllers = require("../controllers/blogController");

const router = express.Router();

router.get("/blogs", controllers.blog_index);

router.get("/blogs/create", controllers.blog_create_get);

router.post("/blogs/create", controllers.blog_create_post);

router.get("/blogs/:id", controllers.blog_details);

router.delete("/blogs/:id", controllers.blog_delete);

module.exports = router;
