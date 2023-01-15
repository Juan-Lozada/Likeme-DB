const { Pool } = require('pg')

const pool = new Pool( {
    host: 'postgresql-jlserverdb.alwaysdata.net',
    user: 'jlserverdb',
    password: 'Juan19051999',
    database: 'jlserverdb_likeme',
    port: '5432',
    allowExitOnIdle: true
})

module.exports = pool