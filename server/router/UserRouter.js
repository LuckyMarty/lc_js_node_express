const express = require('express')
const UserController = require('../controller/UserController')
const TokenMiddleware = require('./middleware/TokenMiddleware')

const UserRouter = express.Router()

UserRouter.post('/login', UserController.login)
UserRouter.post('/signup', UserController.signup)

UserRouter.post('/data/details', TokenMiddleware, UserController.dataDetails)


module.exports = UserRouter