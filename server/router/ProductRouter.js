const express = require('express')
const ProductController = require('../controller/ProductController')
const TokenMiddleware = require('./middleware/TokenMiddleware')

const productRouter = express.Router();

productRouter.get('/', ProductController.getAll);
productRouter.get('/:id', ProductController.getById);
productRouter.post('/', TokenMiddleware, ProductController.add);
productRouter.put('/:id', TokenMiddleware, ProductController.edit);
productRouter.delete('/:id', TokenMiddleware, ProductController.remove);


module.exports = productRouter