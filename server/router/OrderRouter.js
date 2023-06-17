const express = require('express')
const OrderController = require('../controller/OrderController')
const TokenMiddleware = require('./middleware/TokenMiddleware')

const OrderRouter = express.Router();

OrderRouter.get('/', OrderController.getAll);
OrderRouter.get('/:id', OrderController.getById);
OrderRouter.post('/', OrderController.add);
OrderRouter.put('/:id', TokenMiddleware, OrderController.edit);
// OrderRouter.delete('/:id', TokenMiddleware, ProductController.remove);


module.exports = OrderRouter