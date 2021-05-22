const express = require('express')
const app = express()
const userRouters = require('./routes/user.router')
const moviesRouter = require('./routes/movies.router')
const DB = require('./db/db.config')
DB.connectDB()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require("cookie-parser")())
app.use(require("cors")())

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})


app.get('/', (req, res) => {
    res.send({
        message: "api works fine"
    })
})

app.use('/', moviesRouter)
app.use('/user', userRouters)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server running on port ${port} 🔥`))