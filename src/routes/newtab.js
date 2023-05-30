const express = require('express');
const newtabController = require('../app/controller/newtabController');
const router = express.Router();

router.get('/create', newtabController.create);
router.post('/store', newtabController.store);
router.get('/:slug', newtabController.show);
router.get('/', newtabController.index);

module.exports = router;