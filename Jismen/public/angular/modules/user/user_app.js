var user = angular.module('user_app', ['ngRoute']);

user.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/signup', {
      templateUrl: 'angular/modules/user/signup.html',
      controller: 'SignupCtrl'
    })

    .when('/user/:id', {
      templateUrl: 'angular/modules/user/user.html',
      controller: 'UserCtrl'
    })

    ;
}]);

user.controller('SignupCtrl', ['$scope', function($scope){
  $scope.page = 'Insription';
}]);
user.controller('UserCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
  $scope.page = "user";
}])
