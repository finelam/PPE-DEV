var express = require('express');
var router = express.Router();

// Accueil admin
router.get('/', function(req, res, next){
  res.render('admin', {title : 'Jismen - ADMIN'});
});

  // router.use(function(req, res, next) {
  //   var token = req.body.token || req.query.token || req.headers['x-access-token'];
  //   if(token){
  //     jwt.verify(token, app.get('secret'), function(err, user){
  //       if(err){
  //         return res.json({success: false, message: 'Echec de l\'authentification'});
  //       } else {
  //         if(user.role != 'admin'){
  //           return res.json({success: false, message:'Vous n\'êtes pas administrateur'})
  //         }
  //         req.user = user;
  //         next();
  //       }
  //     });
  //   } else {
  //     return res.status(403).send({success: false, message: 'Pas de token'});
  //   }
  // });

module.exports = router;
