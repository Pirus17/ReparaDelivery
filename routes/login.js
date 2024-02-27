var express = require('express');
var router = express.Router();
const loginControllers= require('../controllers/loginControllers');

/* GET home page (home page). */
router.get('/', loginControllers.index);

router.post('/', loginControllers.datosUsuario);

module.exports = router;