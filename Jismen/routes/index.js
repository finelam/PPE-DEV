var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  	{ 
  		title: 'Produits',
  		categories: [
				{ nom: 'Hommes', redirection: '#mens' },
				{ nom: 'Femmes', redirection: '#womens' },
				{ nom: 'Enfants', redirection: '#kids' }
			],
			marques: ['Nike','ADDIDAS','H&M','LACOSTE'],
			produitsphares: [
				{images:'images/home/product1.jpg',prix:'56', description:'Easy Polo Black Edition'}, 
				{images:'images/home/product2.jpg',prix:'56', description:'Easy Polo Black Edition'},
				{images:'images/home/product3.jpg',prix:'56', description:'Easy Polo Black Edition'},
				{images:'images/home/product4.jpg',prix:'56', description:'Easy Polo Black Edition'},
				{images:'images/home/product5.jpg',prix:'56', description:'Easy Polo Black Edition'},
				{images:'images/home/product6.jpg',prix:'56', description:'Easy Polo Black Edition'}
			]
		}
	);
})


module.exports = router;
