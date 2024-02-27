var express = require('express');
var router = express.Router();
const usuarioControllers= require('../controllers/usuarioControllers');

/* GET home page (home page). */
router.get('/', usuarioControllers.index);


module.exports = router;