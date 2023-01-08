const consults = {}
const { feed, post } = require('../Credentials/function')

consults.get = async (req, res) => {

    const posts = await feed();
    res.json(posts);

}

consults.post = async (req, res) => {

    const { titulo, url, descripcion } = req.body;
    await post(titulo, url, descripcion);
    res.send("El posts se agregó de manera exitosa");

}

module.exports = consults;
