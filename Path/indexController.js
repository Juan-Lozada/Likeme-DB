const path = require('path')

const controller = { 

    show: (req, res) => {
        const route = path.resolve(__dirname, '../public/index.html')
        res.sendFile(route);
    }
}

module.exports = controller