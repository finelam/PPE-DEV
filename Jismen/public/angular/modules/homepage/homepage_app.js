var homepage = angular.module('homepage_app', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'homepageControllers', 'homepageServices']);

homepage.config(['$routeProvider', function($routeProvider){
	$routeProvider
	// PRODUCTS
		.when('/', {
			templateUrl: 	'angular/modules/homepage/partials/homepage.html',
			controller: 	'homepageCtrl'
		})
		.when('/tag/:tag', {
			templateUrl: 	'angular/modules/homepage/partials/tag.html',
			controller: 	'tagCtrl'
		})
		.when('/categorie/:cat/', {
			templateUrl: 	'angular/modules/homepage/partials/subcat.html',
			controller: 	'subcatCtrl'
		})

		// USER
		.when('/login/', {
			templateUrl: 'angular/modules/homepage/partials/login.html',
			controller: 'LoginCtrl'
		})
		.when('/signup/', {
			templateUrl: 'angular/modules/homepage/partials/signup.html',
			controller: 'SignupCtrl'
		})
		.when('/user/:id', {
			templateUrl: 'angular/modules/homepage/partials/user.html',
			controller: 'UserCtrl'
		})

		//description produit
		.when('/descriptionproduit/:product', {
			templateUrl: 'angular/modules/homepage/partials/descriptionproduit.html',
			controller: 'DescriptionproduitCtrl'
		})
		;
}]);
