const jwt = require('jsonwebtoken');

const TokenMiddleware = (req, res, next) => {
    try {
        // console.log(jwt.sign({ foo: 'bar' }, 'maSuperCle'));
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, 'maSuperCle');
        req.user = decoded
        next()
    }
    catch (err) {
        res.status(401).json({ message: "Wrong Token" })
    }
}

module.exports = TokenMiddleware