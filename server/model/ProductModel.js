const db = require('../data/sqlite3')

const getAll = async () => {
    const result = await db.database.all('SELECT * FROM products')
    return result
}

const getById = async (id) => {
    const result = await db.database.get('SELECT * FROM products WHERE id=?', id)
    return result
}

const add = async (name, description, image, quantity, price) => {

    if (!name) return { error: "Product Name shouldn't be empty" }

    try {
        const result = await db.database.run(
            'INSERT INTO products (name, description, image, quantity, price) VALUES (?,?,?,?,?)',
            name, description, image, quantity, price
        )
        if (result.lastID) return result
        else return { error: "Can't add the product" }
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