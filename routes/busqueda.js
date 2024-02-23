var express = require('express');
var router = express.Router();
const busquedaControllers= require('../controllers/busquedaControllers');

/* GET home page (home page). */
router.get('/', busquedaControllers.index);

router.post('/', busquedaControllers.index);

module.exports = router;