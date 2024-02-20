var express = require('express');
var router = express.Router();
const compraControllers= require('../controllers/compraControllers');

/* GET home page (home page). */
router.get('/', compraControllers.index);

module.exports = router;