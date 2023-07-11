var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

module.exports = router;