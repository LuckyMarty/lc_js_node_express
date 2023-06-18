const express = require('express')
const UserController = require('../controller/UserController')
const TokenMiddleware = require('./middleware/TokenMiddleware')

const UserRouter = express.Router()

UserRouter.post('/login', UserController.login)
UserRouter.post('/signup', UserController.signup)

UserRouter.post('/data', TokenMiddleware, UserController.data)
UserRouter.put('/data/details', TokenMiddleware, UserController.editDetails)

UserRouter.delete('/', TokenMiddleware, UserController.remove)


module.exports = UserRouter