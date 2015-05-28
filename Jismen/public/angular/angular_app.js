/**
 * Created by oallam on 14/05/15.
 */
var app = angular.module("jismen", ['ngRoute', 'homepage_app']);
app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'angular/modules/homepage/homepage.html'
		})
		.when('/user/',{
			templateUrl: 'angular/modules/user/user.html',
			controller: "userCtrl"
		})
		.otherwise({ redirectTo: '/' });
}]);

// app.controller("adminCtrl", ["$scope", "$location", function($scope, $location){
// 	$scope.title = "Jismen";
// }]);

app.controller("mainCtrl", ["$scope", "$location", function($scope, $location){
}]);