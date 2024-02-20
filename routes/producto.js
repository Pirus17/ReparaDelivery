var express = require('express');
var router = express.Router();
const productoControllers= require('../controllers/productoControllers');

/* GET home page (home page). */
router.get('/', productoControllers.index);

router.post('/', productoControllers.filtrar);


module.exports = router;