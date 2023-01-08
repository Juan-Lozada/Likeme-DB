const { Pool } = require('pg')

const pool = new Pool( {
    host: 'localhost',
    user: 'postgres',
    password: '19051999',
    database: 'likeme',
    port: '2205',
    allowExitOnIdle: true
})

module.exports = pool