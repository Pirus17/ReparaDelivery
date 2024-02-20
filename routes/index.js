var express = require('express');
var router = express.Router();

/* GET home page (home page). */
router.get('/', function (req,res,next) {
  res.render('index', { title: 'Repara-Delivery' });
});


router.get('/tecnico', function(req, res, next) {
  res.render('tecnico', { title: 'Tecnico' });
});

module.exports = router;