var admin = angular.module('admin_app', ['ngRoute', 'adminControllers', 'adminServices']);

admin.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'angular/modules/admin/partials/admin.html',
      controller: 'AdminCtrl'
    })
    .when('/login', {
      templateUrl: 'angular/modules/admin/partials/login.html',
      controller: 'LoginCtrl'
    })
    .when('/users',{
      templateUrl: 'angular/modules/admin/partials/users.html',
      controller: 'UsersCtrl'
    })
    .when('/users/:user',{
      templateUrl: 'angular/modules/admin/partials/user.html',
      controller: 'UserCtrl'
    })
    .when('/new/users',{
      templateUrl: 'angular/modules/admin/partials/new_users.html',
      controller: 'NewUserCtrl'
    })
    .when('/products',{
      templateUrl: 'angular/modules/admin/partials/products.html',
      controller: 'ProductsCtrl'
    })
    .when('/products/:product',{
      templateUrl: 'angular/modules/admin/partials/product.html',
      controller: 'ProductCtrl'
    })
    .when('/new/products/', {
      templateUrl: 'angular/modules/admin/partials/new_products.html',
      controller: 'NewProductCtrl'
    })
    ;
}]);
