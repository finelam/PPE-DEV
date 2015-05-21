/**
 * Created by oallam on 14/05/15.
 */
var app = angular.module("jismen", []);

app.controller("adminCtrl", ["$scope", "$location", function($scope, $location){
	$scope.title = "Jismen";
}]);

app.controller("loginCtrl", ["$scope", "$location", function($scope, $location){
	$scope.login = null;
	$scope.passwd = null;
}]);