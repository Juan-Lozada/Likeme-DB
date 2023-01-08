const pool = require('./conexion')

const feed = async () => {

    try {
        const { rows } = await pool.query('SELECT * FROM posts;')
        return rows
    }
    catch (e) {
        console.log(e)
    }
}

const post = async (titulo, img, descripcion) => {
    try {
        const consulta = 'INSERT INTO posts VALUES (DEFAULT, $1, $2, $3);'
        const values = [titulo, img, descripcion];
        const res = await pool.query(consulta, values)
    }
    catch (e) {
        console.log(e)
    }
}

module.exports = {feed, post}