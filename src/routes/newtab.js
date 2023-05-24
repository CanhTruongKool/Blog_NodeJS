const express = require('express');
const { index } = require('../app/controller/newtabController');
const router = express.Router();

const newtabController = require('../app/controller/newtabController')


newtabController.index
//slug
router.use('/:slug',newtabController.show);
router.use('/',newtabController.index);



module.exports = router;