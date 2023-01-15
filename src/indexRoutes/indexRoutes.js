const express = require('express');
const router = express.Router();

const indexController = require('../Path/indexController')
const indexComponent = require('./indexComponent')

router.get("/", indexController.load);
router.use('/posts', indexComponent);


module.exports = router;