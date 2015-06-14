var admin = angular.module('admin_app', ['ngRoute']);

admin.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'angular/modules/admin/admin.html',
      controller: 'AdminCtrl'
    })
    .when('/users',{
      templateUrl: 'angular/modules/admin/users.html',
      controller: 'UsersCtrl'
    })
    .when('/products',{
      templateUrl: 'angular/modules/admin/products.html',
      controller: 'ProductsCtrl'
    });
}]);

admin.controller('AdminCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('/api/user/all').success(function(users){
    $scope.total_users = users.length;
  });
  $http.get('/api/comment/all').success(function(comments){
    $scope.total_comments = comments.length;
  })
  $http.get('/api/product/all').success(function(products){
    $scope.total_products = products.length;
  })
}]);

admin.controller('UsersCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.recherche = "";
  $http.get('/api/user/all').success(function(users){
      $scope.users = users;
    });
  $http.get('/api/comment/all').success(function(comments){
    $scope.comments = comments;
  });
}]);

admin.controller('ProductsCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.recherche = "";
  $http.get('/api/product/all').success(function(products){
    $scope.products = products;
  });
  $http.get('/api/categorie/all').success(function(categories){
    $scope.categories = categories;
  });
}]);
