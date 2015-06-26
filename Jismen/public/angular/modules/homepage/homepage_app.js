var homepage = angular.module('homepage_app', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'user_app']);

homepage.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 	'angular/modules/homepage/homepage.html',
			controller: 	'homepageCtrl'
		})

		.when('/categorie/:cat/', {
			templateUrl: 	'angular/modules/homepage/subCat.html',
			controller: 	'subCatCtrl'
		});
}]);

homepage.controller('homepageCtrl', ['$scope', function($scope){
	$scope.test = 'homepageCtrl dans homepage_app.js';
	$scope.slides = [
		{
			image: 'http://img.cache-cache.fr/products_images/prod_27336/h_robe-sans-manches-dentelle-faux-bustier-cache-cache-NOIR-front-44.jpg',
			text : 'robe courte'
		},
		{
			image: 'http://img.cache-cache.fr/products_images/prod_20945/g_robe-bustier-decollete-coeur-cache-cache-VERMILLON-onroll-1174.jpg',
			text : 'robe bustier'
		},
		{
			image: 'http://img.cache-cache.fr/products_images/prod_20985/h_robe-debardeur-droite-cache-cache-noir-onroll-44.jpg',
			text : 'robe débarddeur'
		}
	];
	$scope.produits = [
		{
			image: 'images/product1.jpg',
			price: '30 €',
			text : 'Easy Polo Black Edition'
		},
		{
			image: 'images/product2.jpg',
			price: '40 €',
			text : 'Easy Polo Black Edition'
		},
		{
			image: 'images/product3.jpg',
			price: '45 €',
			text : 'Easy Polo Black Edition'
		},
		{
			image: 'images/product4.jpg',
			price: '30 €',
			text : 'Easy Polo Black Edition'
		}
	];
	$scope.produitsphares = [
		{
			image: 'images/gallery1.jpg',
			price: '30 €',
			text : 'Easy Polo Black Edition'
		},
		{
			image: 'images/gallery2.jpg',
			price: '40 €',
			text : 'Easy Polo Black Edition'
		},
		{
			image: 'images/gallery3.jpg',
			price: '45 €',
			text : 'Easy Polo Black Edition'
		},
		{
			image: 'images/gallery4.jpg',
			price: '30 €',
			text : 'Easy Polo Black Edition'
		}
	];
}]);

homepage.controller('subCatCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
	$scope.test = $routeParams.cat;
}]);
