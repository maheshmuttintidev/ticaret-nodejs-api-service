const moviesList = require('../db/movies.list.json')

exports.getMoviesList = (req, res) => {
    res.json(moviesList)
}