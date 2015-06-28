var user = angular.module('user_app', ['ngRoute']);

user.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/signup', {
      templateUrl: 'angular/modules/user/partials/signup.html',
      controller: 'SignupCtrl'
    })

    .when('/login', {
      templateUrl: 'angular/modules/user/partials/login.html',
      controller: 'LoginCtrl'
    })

    .when('/user/', {
      templateUrl: 'angular/modules/user/partials/user.html',
      controller: 'UserCtrl'
    })

    ;
}]);

user.controller('LoginCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $scope.page = 'Login';
  $scope.email = null;
  $scope.password = null;
  $scope.login = function(email, password){
    $http.post('/api/user/auth', {email: email, password: password});
  };
}]);

user.controller('SignupCtrl', ['$scope', function($scope){
  $scope.page = 'Insription';
  $scope.name = null;
  $scope.firstname = null;
  $scope.address = null;
  $scope.zipcode = null;
  $scope.city = null;
  $scope.email = null;
  $scope.paswword = null;
  $scope.confirmPass = null;
  $scope.tel = null;
  $scope.signup = function(){
    console.log(
      $scope.name,
      $scope.firstname,
      $scope.address,
      $scope.zipcode,
      $scope.city,
      $scope.email,
      $scope.paswword,
      $scope.confirmPass,
      $scope.tel
    );
  };
}]);

user.controller('UserCtrl', ['$scope', '$routeParams', '$http',function($scope, $routeParams, $http){

}]);
