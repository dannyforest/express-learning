const axios = require("axios");
const {graphQLQuery} = require("../helpers/graphQLQuery");

// const Book = require("../models/book");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Site Home Page");
});

// Display list of all books.
exports.book_list = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book list");
});

// Display detail page for a specific book.
exports.book_detail = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`);
});

// Display book create form on GET.
exports.book_create_get = asyncHandler(async (req, res, next) => {
    const response = await graphQLQuery(`
      query MyQuery {
          listUserScores {
            items {
              id
              name
              score
              userId
            }
          }
        }
      `)

    if (response.data.errors) {
        console.log(response.data.errors);

        return res.json({
            errors: response.data.errors
        })
    }

    res.json({
        data: response.data.data.listUserScores.items,
        body: req.body
    });
});

// Handle book create on POST.
exports.book_create_post = asyncHandler(async (req, res, next) => {
    console.log(req.body);
    // check if book exists
    // validate data
    // add to database
    res.json({
        body: req.body
    });
});

// Display book delete form on GET.
exports.book_delete_get = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: Book delete GET ${req.params.id}`);
});

// Handle book delete on POST.
exports.book_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book delete POST");
});

// Display book update form on GET.
exports.book_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book update GET");
});

// Handle book update on POST.
exports.book_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book update POST");
});
