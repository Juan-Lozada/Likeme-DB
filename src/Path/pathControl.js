
const { feed, post } = require('../Credentials/function')

const consults = {

    get :  async (req, res) => {

        const posts = await feed();
        res.json(posts);
    
    },
    
    post : async (req, res) => {
    
        const { titulo, url, descripcion } = req.body;
        const posts = await post(titulo, url, descripcion);
        res.json(posts);
    
    }
}

module.exports = consults;
