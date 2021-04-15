const express = require('express')
const app = express()
const userRouters = require('./routes/user.router')
const DB = require('./db/db.config')
DB.connectDB()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(require("cookie-parser")())
app.use(require("cors")())

// app.use(function(req, res, next) {
//     res.header('Content-Type', 'application/json;charset=UTF-8')
//     res.header('Access-Control-Allow-Credentials', true)
//     res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept'
//     )
//     next()
//   })
// {
//     origin: [
//         `http://localhost:3000/`,
//         `http://localhost:3000/login`,
//         `https://ticaret-001.netlify.app/`
//     ],
//     credentials: true
// }

app.get('/', (req, res) => {
    res.send({
        message: "api works fine"
    })
})

app.use('/user', userRouters)


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));