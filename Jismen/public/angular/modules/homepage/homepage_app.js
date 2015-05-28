var homepage = angular.module('homepage_app', ['ngRoute']);

homepage.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 	'angular/modules/homepage/homepage.html',
			controller: 	'homepageCtrl' 
		})
		.when('/:cat/', {
			templateUrl: 	'angular/modules/homepage/subCat.html',
			controller: 	'subCatCtrl'
		});
}]);

homepage.controller('homepageCtrl', ['$scope', function($scope){
	$scope.test = 'homepageCtrl dans homepage_app.js';
}]);

homepage.controller('subCatCtrl', ['$scope', function($scope){
	$scope.test = 'subCatCtrl';
}]);