const express = require("express")
// const {protect}=require('../middlewares/authmiddleware')
const router = express.Router();

const Movie = require("../controllers/movies")

router.route('/')
.get(Movie.getallmovies)
.post(Movie.createmovies)

module.exports=router

