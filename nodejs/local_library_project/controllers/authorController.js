const Author = require("../models/author");
const Book = require("../models/book");
const asyncHandler = require("express-async-handler");

// Display list of all Authors.
exports.authorList = asyncHandler(async (req, res, next) => {
  const allAuthors = await Author.find().sort({ family_name: 1 }).exec();

  res.render("authorList", {
    title: "Author List",
    authorList: allAuthors,
  });
});

// Display detail page for a specific Author.
exports.authorDetail = asyncHandler(async (req, res, next) => {
  const authorId = req.params.id;

  // Get details of author and all their books (in parallel)
  const [author, allBooksByAuthor] = await Promise.all([
    Author.findById(authorId).exec(),
    Book.find({ author: authorId }, "title summary").exec(),
  ]);

  if (author == null) {
    // No results.
    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }

  res.render("authorDetail", {
    title: "Author Detail",
    author: author,
    authorBooks: allBooksByAuthor,
  });
});

// Display Author create form on GET.
exports.authorCreateGet = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author create GET");
});

// Handle Author create POST
exports.authorCreatePost = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Autho create POST");
});

// Display Author delete form on GET
exports.authorDeleteGet = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author delete GET");
});

// Handle Author delete on POST.
exports.authorDeletePost = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author delete POST");
});

// Display Author update form on GET.
exports.authorUpdateGet = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update GET");
});

// Handle Author update on POST.
exports.authorUpdatePost = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update POST");
});
