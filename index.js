const express = require('express');
const cors = require('cors')
const PORT = 3000;
const indexComponent = require('./src/indexRoutes/indexComponent');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', indexComponent)


app.listen(PORT, console.log(`SERVIDOR ENCENDIDO PUERTO: ${PORT}`))