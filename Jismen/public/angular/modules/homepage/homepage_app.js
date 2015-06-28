var homepage = angular.module('homepage_app', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'user_app']);

homepage.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 	'angular/modules/homepage/homepage.html',
			controller: 	'homepageCtrl'
		})
		.when('/tag/:tag', {
			templateUrl: 	'angular/modules/homepage/tag.html',
			controller: 	'tagCtrl'
		})
		.when('/categorie/:cat/', {
			templateUrl: 	'angular/modules/homepage/subCat.html',
			controller: 	'subcatCtrl'
		});
}]);

homepage.controller('homepageCtrl', ['$scope', '$http', function($scope, $http){
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
			text : 'robe débardeur'
		}
	];
	$http.get('/api/product/all').success(function(products){$scope.products = products;});
}]);

homepage.controller('menuCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$http.get('/api/categorie/all').success(function(categories){
		$scope.isCollapsed = true;
		$scope.categories = categories;
	});
}]);

homepage.controller('subcatCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$scope.categorie = $routeParams.cat;
	$scope.recherche = "";
	$http.get('/api/product/cat/'+$routeParams.cat).success(function(products){
		$scope.products = products;
	});
	$http.get('/api/categorie/all').success(function(categories){
		$scope.categories = categories;
	});
}]);

homepage.controller('tagCtrl', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams){
	$scope.tag = $routeParams.tag;
	$scope.recherche= "";
	$http.get('/api/product/tag/'+$routeParams.tag).success(function(products){
		$scope.products = products;
	});
	$http.get('/api/categorie/all').success(function(categories){
		$scope.categories = categories;
	});
}]);
