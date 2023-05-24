const express = require('express');
const { index } = require('../app/controller/siteController');
const router = express.Router();

const siteController = require('../app/controller/siteController')


siteController.index
//slug
router.use('/:slug',siteController.show);
router.use('/',siteController.index);



module.exports = router;