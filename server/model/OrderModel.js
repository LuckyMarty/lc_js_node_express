const db = require('../data/sqlite3')

const getAll = async () => {
    const result = await db.database.all('SELECT users.firstname, users.lastname, users.email, orders.* FROM orders INNER JOIN users ON users.id = orders.id_user');
    return result
}

const getById = async (id) => {
    const result = await db.database.get('SELECT users.firstname, users.lastname, users.email, orders.* FROM orders INNER JOIN users ON users.id = orders.id_user WHERE orders.id=?', id)
    if (result) return result
    else return { error: "No order for that ID" }
}

const add = async (id_user, products, payment, total, date) => {

    try {
        const result = await db.database.run(
            'INSERT INTO orders (id_user, products, payment, total, status, date) VALUES (?,?,?,?,?,?)',
            id_user, products, payment, total, "In Payment", date
        )
        if (result.lastID) return result
        else return { error: "Can't add the order" }
    }
    catch (err) {
        console.error(err)
    }
}

const edit = async (id, name, description, image, quantity, price) => {
    const result = await db.database.run(
        'UPDATE products SET name=?, description=?, image=?, quantity=?, price=? WHERE id=?',
        name, description, image, quantity, price, id
    )
    if (result.changes > 0) return result
    else return { error: "Can't edit the product" }
}

const remove = async (id) => {
    const result = await db.database.run(
        'DELETE FROM products WHERE id=?',
        id
    )
    if (result.changes > 0) return result
    else return { error: "Can't remove the product" }
}


module.exports = {
    getAll,
    getById,
    add,
    edit,
    remove
}