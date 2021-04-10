const express = require('express')
const app = express()
const userRouters = require('./routes/user.router')
const DB = require('./db/db.config')
DB.connectDB()

// middlewares
app.use(require("cors")())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.send({
        message: "api works fine"
    })
})

app.use('/user', userRouters)


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));