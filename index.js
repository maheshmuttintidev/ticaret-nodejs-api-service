const express = require('express')
const app = express()
const userRouter = require('./routes/user.router')
const moviesRouter = require('./routes/movies.router')
const DB = require('./db/db.config')
DB.connectDB()


// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require("cookie-parser")())
app.use(require("cors")())



app.get('/', (req, res) => {
    res.send({
        message: "api works fine"
    })
})

app.use('/', moviesRouter)
app.use('/user', userRouter)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server running on port ${port} 🔥`))