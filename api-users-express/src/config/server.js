const { Pool } = require('pg')
const dotenv = require('dotenv')

dotenv.config()

//db
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

pool.on('connect', () => {
    console.log('Connected on Postgres')
})

module.exports = {
    query: (text, params) => pool.query(text, params)
}