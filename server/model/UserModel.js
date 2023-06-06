const db = require('../data/sqlite3')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const saltRounds = 10;

const login = async (email, password) => {
    const result = await db.database.get('SELECT * FROM users WHERE email=?', email)
    if (result) {

        if (await bcrypt.compare(password, result.password)) {
            delete result.password
            const token = jwt.sign(result, 'maSuperCle');
            return { message: "User connected", token }
        }
        else {
            return { error: "User and/or Password incorrect" }
        }
    } else {
        return { error: "User and/or Password incorrect" }
    }

}

const signup = async (email, password) => {

    const hash = await bcrypt.hash(password, saltRounds)
    // Store hash in your password DB.
    const result = await db.database.run(
        'INSERT INTO users (email,password) VALUES (?,?)',
        email, hash
    )
    // console.log(result);
    if (result.lastID) return result
    else return { error: "Can't add user" }


}

module.exports = {
    login,
    signup
}