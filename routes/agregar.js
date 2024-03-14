var express = require('express');
var router = express.Router();
const agregarControllers= require('../controllers/agregarControllers');

/* GET home page (home page). */
router.get('/', agregarControllers.index);

router.post('/', agregarControllers.index);

module.exports = router;