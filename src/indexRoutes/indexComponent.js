const express = require('express')
const router = express.Router()

const pathControl = require('../Path/pathControl')
const indexController = require('../Path/indexController')

router.get('/', indexController.show)
router.get('/posts', pathControl.get)
router.post('/posts', pathControl.post)
router.put('/posts/like/:id', pathControl.like)
router.delete('/posts/:id', pathControl.delete)


module.exports = router; 