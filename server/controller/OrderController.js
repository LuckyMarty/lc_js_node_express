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
    const result = await OrderModel.add(req.body.id_user, req.body.payment, req.body.total, req.body.date)
    console.log(result);
    res.status(200).json(result.changes)
}

const edit = async (req, res) => {
    const result = await OrderModel.edit(req.params.id, req.body.id_user, req.body.products, req.body.total, req.body.payment, req.body.status)
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