const express = require('express')
const UserController = require('../controller/UserController')

const UserRouter = express.Router()

UserRouter.post('/login', UserController.login)
UserRouter.post('/signup', UserController.signup)


module.exports = UserRouter