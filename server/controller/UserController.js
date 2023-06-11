const UserModel = require('../model/UserModel')


const login = async (req, res) => {
    const result = await UserModel.login(req.body.email, req.body.password)
    res.json(result)
}

const signup = async (req, res) => {
    const result = await UserModel.signup(req.body.firstname, req.body.lastname,req.body.email, req.body.password)
    res.json(result)
}

const data = async (req, res) => {
    const result = await UserModel.data(req.user.email)
    res.json(result);
}

const editDetails = async (req, res) => {
    const result = await UserModel.editDetails(req.user.email, req.body.firstname, req.body.lastname, req.body.email)
    res.json(result);
}

module.exports = {
    login,
    signup,
    data,
    editDetails
}