const jwt = require('jsonwebtoken');

const TokenMiddleware = (req, res, next) => {
    const header = req.headers.authorization;
    const token = header && header.split(' ')[1];

    if (token == null) return res.status(401).json({ message: "Wrong Token" });

    jwt.verify(token, 'maSuperCle', (err, user) => {
        if (err) return res.status(401).json({ message: "Wrong Token" });
        req.user = user;
        next()
    })
}

module.exports = TokenMiddleware