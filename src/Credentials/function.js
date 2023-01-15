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
        return res;
    }
    catch (e) {
        console.log(e)
    }
}

const like = async (id) => {
    const cosulta = 'UPDATE posts SET likes = likes + 1  WHERE id = $1;'
    const value = [id];
    await pool.query(consulta, value);
}

const deletePost = async (id) => {
    const consulta = 'DELETE FROM posts WHERE id = $1';
    const value = [id];
    await pool.query(consulta, value)
}

module.exports = { feed, post, like, deletePost }