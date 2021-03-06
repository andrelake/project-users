const db = require('../config/server')

exports.findAllUsers = async (_, res) => {
    const response = await db.query(
        'SELECT * FROM users_table ORDER BY user_id ASC'
    )
    
    res.status(200).send(response.rows)
}

exports.findUserById = async (req, res) => {
    const user_id = req.params.id
    const response = await db.query(
        'SELECT * FROM users_table WHERE user_id = $1',
        [user_id]
    )
    
    res.status(200).send(response.rows)
}

exports.createUser = async (req, res) => {
    const { user_id, username, first_name, last_name, gender, password, status } = req.body
    const { rows } = await db.query(
        'INSERT INTO users_table (user_id, username, first_name, last_name, gender, password, status) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [user_id, username, first_name, last_name, gender, password, status]
    )

    res.status(201).send({
        message: 'User added successfully',
        body: {
            user: { user_id, username, first_name, last_name, gender, password, status }
        }
    })
}

exports.deleteUserById = async (req, res) => {
    const user_id = req.params.id
    const { rows } = await db.query(
        'DELETE FROM users_table WHERE user_id = $1',
        [user_id]
    )

    res.status(201).send({
        message: `User id: ${user_id} deleted successfully`,
        body: {
            user: { user_id }
        }
    })
}

exports.updateUserById = async (req, res) => {
    let user_id = req.params.id
    let body = req.body;

    for (let b in body) {
        await db.query(
            `UPDATE users_table SET ${b} = $1 WHERE user_id = $2`,
            [body[b], user_id]
        )
    }

    res.status(201).send(`Updated! Id: ${user_id}`)
}