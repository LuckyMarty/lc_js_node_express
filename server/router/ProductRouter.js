const express = require('express')
const ProductController = require('../controller/ProductController')
const TokenMiddleware = require('./middleware/TokenMiddleware')

const ProductRouter = express.Router();

ProductRouter.get('/', ProductController.getAll);
ProductRouter.get('/:id', ProductController.getById);
ProductRouter.post('/', TokenMiddleware, ProductController.add);
ProductRouter.put('/:id', TokenMiddleware, ProductController.edit);
ProductRouter.delete('/:id', TokenMiddleware, ProductController.remove);


module.exports = ProductRouter