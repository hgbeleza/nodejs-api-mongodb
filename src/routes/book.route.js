const { Router } = require("express");
const BookController = require("../controllers/BookController.js");

const router = Router();

router.post("/books", BookController.create);
router.get("/books", BookController.getAll);
router.get("/books/:_id", BookController.getById);
router.put("/books/:_id", BookController.update);
router.delete("/books/:_id", BookController.delete);

module.exports = router;
