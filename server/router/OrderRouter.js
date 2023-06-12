const express = require('express')
const OrderController = require('../controller/OrderController')
const TokenMiddleware = require('./middleware/TokenMiddleware')

const OrderRouter = express.Router();

OrderRouter.get('/', OrderController.getAll);
// productRouter.get('/:id', ProductController.getById);
// productRouter.post('/', TokenMiddleware, ProductController.add);
// productRouter.put('/:id', TokenMiddleware, ProductController.edit);
// productRouter.delete('/:id', TokenMiddleware, ProductController.remove);


module.exports = OrderRouter