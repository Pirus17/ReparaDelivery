var express = require('express');
var router = express.Router();
const loginControllers= require('../controllers/loginControllers');

/* GET home page (home page). */
router.get('/', loginControllers.index);
router.get('/registrarUsuario', loginControllers.indexRegistro);

router.post('/', loginControllers.cuentaUsuario);
router.post('/registrarUsuario', loginControllers.RegistrarUsuario);


module.exports = router;