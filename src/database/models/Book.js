const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    lowercase: true
  },
  author: {
    type: String,
  },
  description: {
    type: String
  },
  price: {
    type: mongoose.Types.Decimal128
  },
  quantity: {
    type: Number,
    default: 0
  }
}, { versionKey: false });

const Book = mongoose.model('books', bookSchema);

module.exports = Book;
