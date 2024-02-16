var express = require('express');
var router = express.Router();

/* GET home page (home page). */
router.get('/', function(req, res, next){
    res.render('index', { title: 'Repara-Delivery' });

  });

/* GET seecion (productos). */
router.get('/productos', function(req, res, next) {
  res.render('productos', { title: 'Productos' });
});

/* GET seecion (comprar). */
router.get('/comprar', function(req, res, next) {
  res.render('comprar', { title: 'Comprar' });
});

router.get('/tecnico', function(req, res, next) {
  res.render('tecnico', { title: 'Tecnico' });
});



module.exports = router;
