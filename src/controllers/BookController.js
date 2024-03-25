const Book = require("../database/models/Book.js");

class BookController {
  static create = async (req, res) => {
    const info = req.body;

    try {
      const data = await Book.create(info);
      return res.status(201).json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // get all documents to database
  static getAll = async (req, res) => {
    try {
      const data = await Book.find();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  // get document by _id
  static getById = async (req, res) => {
    const { _id } = req.params;

    try {
      const data = await Book.findById(_id);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  // update document
  static update = async (req, res) => {
    const { _id } = req.params;
    const newData = req.body;

    try {
      await Book.findByIdAndUpdate(_id, newData);
      const updated = await Book.findById(_id);
      return res
        .status(200)
        .json({ message: "Documento atualizado!", updated });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  // delete document by _id
  static delete = async (req, res) => {
    const { _id } = req.params;

    try {
      await Book.findByIdAndDelete(_id);
      return res.status(200).json({ message: "Deleted success!" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

module.exports = BookController;
