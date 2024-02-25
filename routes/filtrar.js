var express = require('express');
var router = express.Router();
const filtrarControllers= require('../controllers/filtrarControllers');

/* GET home page (home page). */
router.get('/', filtrarControllers.index);

router.post('/', filtrarControllers.index);





module.exports = router;