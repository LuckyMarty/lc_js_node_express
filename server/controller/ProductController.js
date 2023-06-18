const ProductModel = require('../model/ProductModel')


const getAll = async (req, res) => {

    const results = await ProductModel.getAll()
    res.status(200).json(results)
}

const getById = async (req, res) => {
    const result = await ProductModel.getById(req.params.id)
    res.status(200).json(result)
}

const add = async (req, res) => {
    const result = await ProductModel.add(req.body.name, req.body.description, req.body.image, req.body.quantity, req.body.price)
    res.status(200).json(result)
}

const edit = async (req, res) => {
    const result = await ProductModel.edit(req.params.id, req.body.name, req.body.description, req.body.image, req.body.quantity, req.body.price)
    res.status(200).json(result.changes)
}

const remove = async (req, res) => {
    const result = await ProductModel.remove(req.params.id)
    res.status(200).json(result.changes)
}

module.exports = {
    getAll,
    getById,
    add,
    edit,
    remove
}