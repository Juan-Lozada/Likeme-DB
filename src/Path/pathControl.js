
const { feed, post, like, deletePost } = require('../Credentials/function')

const consults = {

    get: async (req, res) => {
        try {
            const posts = await feed();
            res.json(posts);
            res.status(200);
        }
        catch (e) {
            console.error(e);
            res.status(500).json({ message: `server internal error` })
        }

    },

    post: async (req, res) => {
        try {
            const { titulo, url, descripcion } = req.body;
            const posts = await post(titulo, url, descripcion);
            res.json(posts);
            res.status(200);
        }
        catch (e) {
            console.error(e);
            res.status(500).json({ message: `server internal error` })
        }

    },


    like: async (req, res) => {
        try {

            const { id } = req.params
            const posts = await like(id)
            res.status(200).json(posts)

        } catch (e) {
            console.log(e)
            res.status(500)
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params
            const posts = await deletePost(id)
            res.status(200).json(posts)

        } catch (e) {
            console.log(e)
            res.status(500)
        }
    }
}

module.exports = consults;
