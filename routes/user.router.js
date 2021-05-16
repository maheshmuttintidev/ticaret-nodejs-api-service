const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/user.controller')

// http://localhost:5000/user/register
userRouter.post('/register', userController.registerUser)
// http://localhost:5000/user/login
userRouter.post('/login', userController.loginUser)

module.exports = userRouter
