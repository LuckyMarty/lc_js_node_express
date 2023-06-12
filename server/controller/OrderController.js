const OrderModel = require('../model/OrderModel')


const getAll = async (req, res) => {
    const results = await OrderModel.getAll()
    res.status(200).json(results)
}

const getById = async (req, res) => {
    const result = await OrderModel.getById(req.params.id)
    res.status(200).json(result)
}

const add = async (req, res) => {
    const result = await OrderModel.add(req.body.name, req.body.description, req.body.image, req.body.quantity, req.body.price)
    console.log(result);
    res.status(200).json(result)
}

const edit = async (req, res) => {
    const result = await OrderModel.edit(req.params.id, req.body.name, req.body.description, req.body.image, req.body.quantity, req.body.price)
    res.status(200).json(result.changes)
}

const remove = async (req, res) => {
    const result = await OrderModel.remove(req.params.id)
    res.status(200).json(result.changes)
}

module.exports = {
    getAll,
    getById,
    add,
    edit,
    remove
}