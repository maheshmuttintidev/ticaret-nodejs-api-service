const express = require('express')
const moviesRouter = express.Router()
const moviesController = require('../controllers/movies.list.controller')

// http://localhost:5000/movies-list
moviesRouter.get('/movies-list', moviesController.getMoviesList)

module.exports = moviesRouter