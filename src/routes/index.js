const express = require("express");
const books = require("./book.route.js");

module.exports = (app) => {
  app.use(express.json(), 
    books,
  );
};
