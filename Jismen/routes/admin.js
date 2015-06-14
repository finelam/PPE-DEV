var express = require('express');
var router = express.Router();

// Accueil admin
router.get('/', function(req, res, next){
  res.render('admin', {title : 'Jismen - ADMIN'});
});

module.exports = router;
