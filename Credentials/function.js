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
        const consulta = 'INSERT INTO posts (titulo, img, descripcion) values (DEFAULT, $1, $2, $3);'
        const values = [titulo, img, descripcion];
        const res = await pool.query(consulta, values)
        return (res);
    }
    catch (e) {
        console.log(e)
    }
}

module.exports = {feed, post}