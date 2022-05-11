const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const ReviewController= require("../controllers/reviewController")
const Middleware = require("../Middleware/Authentication")



router.post("/register",userController.Createuser)


router.post('/login', userController.login)

router.post('/books',Middleware.Mid1,BookController.Bookcreate)

router.get('/books',Middleware.Mid2,BookController.GetBook)

router.get('/books/:bookId',Middleware.Mid3,BookController.resultBook)

router.put("/books/:bookId",Middleware.Mid3,BookController.UpdateBook)

router.delete("/books/:bookId",Middleware.Mid3,BookController.DeleteBook)

router.post('/books/:bookId/review',ReviewController.CreateReview)

module.exports = router;