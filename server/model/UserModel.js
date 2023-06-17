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
            return { message: "User connected", token, id: result.id }
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



// Data
const data = async (email) => {
    const result = await db.database.get('SELECT firstname, lastname, email, role FROM users WHERE email=?', email)
    if (result) {
        return { data: result }

    } else {
        return { error: "Connection failed" }
    }
}

const editDetails = async (email, firstname, lastname, newEmail) => {
    const result = await db.database.run(
        'UPDATE users SET firstname=?, lastname=?, email=? WHERE email=?',
        firstname, lastname, newEmail, email
    )

    const token = jwt.sign({ email: newEmail }, 'maSuperCle')
    const response = {
        success: "Saved Successfully",
        token
    }

    if (result.changes > 0) return response
    else return { error: "Can't edit user" }
}


const remove = async (id, email) => {
    const userExist = await db.database.get('SELECT * FROM users WHERE id=? AND email=?', id, email)
    if (userExist) {
        const result = await db.database.run(
            'DELETE FROM users WHERE id=? AND email=?',
            id, email
        )
        return true
    } else return { error: "Can't remove user" }

}





// Functions
const isEmail = (email) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regex)) return true;
    else return false;
}


module.exports = {
    login,
    signup,
    data,
    editDetails,
    remove
}