const express = require('express')
const OrderController = require('../controller/OrderController')
const TokenMiddleware = require('./middleware/TokenMiddleware')

const OrderRouter = express.Router();

OrderRouter.get('/', TokenMiddleware, OrderController.getAll);
OrderRouter.get('/:id', TokenMiddleware, OrderController.getById);
OrderRouter.get('/user/:id', TokenMiddleware, OrderController.getByUserId);
OrderRouter.post('/', TokenMiddleware, OrderController.add);
OrderRouter.put('/:id', TokenMiddleware, OrderController.edit);
// OrderRouter.delete('/:id', TokenMiddleware, ProductController.remove);


module.exports = OrderRouter