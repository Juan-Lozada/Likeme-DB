const express = require('express')
const indexController = require('../Path/indexController')
const indexComponent = require('./indexComponent')
const app = express()

app.get('/', indexController.show)
app.use('/posts', indexComponent)



module.exports= app