const BookInstance = require("../models/bookinstance");
const Book = require("../models/book");

const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display list of all BookInstances.
exports.bookinstanceList = asyncHandler(async (req, res, next) => {
  const allBookInstances = await BookInstance.find().populate("book").exec();

  res.render("bookInstanceList", {
    title: "Book Instance List",
    bookInstanceList: allBookInstances,
  });
});

// Display detail page for a specific BookInstance.
exports.bookinstanceDetail = asyncHandler(async (req, res, next) => {
  const bookInstanceId = req.params.id;

  const bookInstance = await BookInstance.findById(bookInstanceId)
    .populate("book")
    .exec();

  if (bookInstance === null) {
    // No results.
    const err = new Error("Book copy not found");
    err.status = 404;
    return next(err);
  }

  res.render("bookInstanceDetail", {
    title: "Book:",
    bookInstance,
  });
});

// Display BookInstance create form on GET.
exports.bookinstanceCreateGet = asyncHandler(async (req, res, next) => {
  const allBooks = await Book.find({}, "title").sort({ title: 1 }).exec();

  res.render("bookInstanceForm", {
    title: "Create BookInstance",
    bookList: allBooks,
  });
});

// Handle BookInstance create on POST.
exports.bookinstanceCreatePost = [
  // Validate and sanitize fields.
  body("book", "Book must be specified").trim().isLength({ min: 3 }).escape(),
  body("imprint", "Imprint must be specified")
    .trim()
    .isLength({ min: 3 })
    .escape(),
  body("status").escape(),
  body("due_back", "Invalid date")
    .optional({ values: "falsy" })
    .isISO8601()
    .toDate(),

  // Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a BookInstance object with escaped and trimmed data.
    const bookInstance = new BookInstance({
      book: req.body.book,
      imprint: req.body.imprint,
      status: req.body.status,
      due_back: req.body.due_back,
    });

    if (!errors.isEmpty()) {
      // There are errors.
      // Render form again with sanitized values/error messages.
      const allBooks = await Book.find({}, "title").sort({ title: 1 }).exec();

      res.render("bookInstanceForm", {
        title: "Create BookInstance",
        bookList: allBooks,
        selectedBook: bookInstance.book._id,
        errors: errors.array(),
        bookInstance: bookInstance,
      });
    } else {
      // Data from form is valid
      await bookInstance.save();
      res.redirect(bookInstance.url);
    }
  }),
];

// Display BookInstance delete form on GET.
exports.bookinstanceDeleteGet = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance delete GET");
});

// Handle BookInstance delete on POST.
exports.bookinstanceDeletePost = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance delete POST");
});

// Display BookInstance update form on GET.
exports.bookinstanceUpdateGet = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance update GET");
});

// Handle bookinstance update on POST.
exports.bookinstanceUpdatePost = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance update POST");
});
