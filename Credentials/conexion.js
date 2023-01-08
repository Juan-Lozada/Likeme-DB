const { Pool } = require('pg')

const credentials = {
    host: 'localhost',
    user: 'postgres',
    password: '19051999',
    database: 'likeme',
    port: '2205',
    allowExitOnIdle: true
}

const pool = new Pool(credentials)

module.exports = pool