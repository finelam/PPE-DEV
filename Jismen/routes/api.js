var express = require('express');
var ObjectId = require('mongoose').Types.ObjectId;
var router = express.Router();
var User = require('../models/user');
var Product = require('../models/product');
var Categorie = require('../models/categorie');
var Comment = require('../models/comment');


router.get('/', function (req, res, next){
  res.send('test');
});


/******** Users *********/

////// methode : GET //////

// methode : GET Retourne tous les utilisateurs
router.get('/user/all', function(req, res){
  User.find(function(err, users){
    if(err)
      res.send(err);
    else {
      if (users)
        res.json(users);
      else
        res.send(false);
    }
  });
});

// methode : GET Retourne l'utilisateur dont l'id est donnée
router.get('/user/:user_id', function(req, res){
  User.findOne(ObjectId(req.params.user_id), function(err, user){
    if (err){
      res.send(err);
    }
    else{
      if(user){
        res.json(user);
      }else{
        res.send(false);
      }
    }
  });
});

////// methode : POST //////

// Crée un nouvel utilisateur
router.post('/user/', function(req, res){
  var user = new User(req.body);
  user.save(function(err){
    if(err)
      res.send('err');
    else
      res.send(true);
  });
});


// Retourne l'utilisateur corerspondant au login + mdp
router.post('/user/login', function(req, res){
  User.find({$and: [{email: req.body.email}, {password: req.body.password}]},function(err, user){
    if (err)
      res.send(err);
    else {
      if(user)
        res.json(user);
      else
        res.send(false);
    }
  });
});

/******* Products *********/

////// methode : GET //////

// Retourne tous les produits
router.get('/product/all', function(req, res){
  Product.find(function(err, products){
    if(err)
      res.send(err);
    else {
      if (products)
        res.json(products);
      else
        res.send(false);
    }
  });
});

// Retourne le produit dont l'id est passé en GET
router.get('/product/:product_id', function(req, res){
  Product.findOne(ObjectId(req.params.product_id) , function(err, product){
    if(err){
      res.send(err);
    } else {
      if(product){
        res.json(product);
      }else {
        res.send(false);
      }
    }
  });
});

// Retourne tous les produits avec le tag promo
router.get('/product/tag/:tag', function(req, res){
  Product.find({tag: req.params.tag}, function(err, products){
    if (err)
      res.send(err);
    else {
      if (products)
        res.json(products);
      else
        res.send(false)
    }
  });
});

////// methode : POST //////

// Crée un nouveau produit
router.post('/product', function(req, res){
  var product = new Product(req.body);
  product.save(function(err){
    if(err)
      res.send(err);
    else
      res.send(true);
  });
});

/******* Comments *********/

////// methode : GET //////

// Retourne tous les commentaires
router.get('/comment/all', function(req, res){
  Comment.find(function(err, comments){
    if(err)
      res.send(err);
    else {
      if (comments)
        res.json(comments);
      else
        res.send(false);
    }
  });
});

// Retourne le commentaire avec l'id demandé
router.get('/comment/:comment_id', function(req, res){
  Comment.findOne(ObjectId(req.params.comment_id), function(err, comment){
    if(err)
      res.send(err);
    else {
      if (comment)
        res.json(comment);
      else
        res.send(false);
    }
  })
});

// Retourne les commentaires de l'auteur donné
router.get('/comment/author/:author_id', function(req, res){
  Comment.find({author_id: ObjectId(req.params.author_id)}, function(err, comment){
    if(err)
      res.send(err);
    else {
      if (comment)
        res.json(comment);
      else
        res.send(false);
    }
  });
});

// Retourne les commentaires du produit donné
router.get('/comment/product/:product_id', function(req, res){
  Comment.find({product_id: ObjectId(req.params.product_id)}, function(err, comment){
    if (err)
      res.send(err);
    else {
      if (comment)
        res.json(comment);
      else
        res.send(false);
    }
  });
});

/******* Categories *********/

////// methode : GET //////

// Retourne tous les catégories
router.get('/categorie/all', function(req, res){
  Categorie.find(function(err, categories){
    if(err)
      res.send(err);
      else {
        if (categories)
          res.json(categories);
        else
          res.send(false);
      }
  })
})

module.exports = router;