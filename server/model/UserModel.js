const db = require('../data/sqlite3')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const saltRounds = 10;

const login = async (email, password) => {
    const result = await db.database.get('SELECT * FROM users WHERE email=?', email)
    if (result) {

        const user = { email }

        if (await bcrypt.compare(password, result.password)) {
            delete result.password
            const token = jwt.sign(user, 'maSuperCle');
            return { message: "User connected", token }
        }
        else {
            return { error: "User and/or Password incorrect" }
        }
    } else {
        return { error: "User and/or Password incorrect" }
    }
}

const signup = async (firstname, lastname, email, password) => {

    if (isEmail(email)) return { error: "Your email must be in a correct format" };

    const userExist = await db.database.get('SELECT email FROM users WHERE email=?', email)
    if (userExist !== undefined) return { error: "This email is already used" }

    const hash = await bcrypt.hash(password, saltRounds)
    const result = await db.database.run(
        'INSERT INTO users (firstname, lastname, email, password) VALUES (?,?,?,?)',
        firstname, lastname, email, hash
    )
    if (result.lastID) return result
    else return { error: "Can't add user" }
}

const data = async (email) => {
    const result = await db.database.get('SELECT firstname, lastname, email, role FROM users WHERE email=?', email)
    if (result) {
        return { data: result }

    } else {
        return { error: "Connection failed" }
    }
}


const isEmail = (email) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regex)) return true; 
    else return false; 
}


module.exports = {
    login,
    signup,
    data
}