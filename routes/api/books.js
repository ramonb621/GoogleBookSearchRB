const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

router.get("/google", (req, res) => {
  console.log(req);
  axios.get("https://www.googleapis.com/books/v1/volumes", {params: req.query})
  .then(({ data: { result } }) => res.json(result))
  // .then(results => console.log(results))
  .catch(err => res.status(422).json(err));
});


module.exports = router;
