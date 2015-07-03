var admin = angular.module('admin_app', ['ngRoute', 'adminControllers', 'adminServices']);

admin.config(['$httpProvider', function($httpProvider){
  $httpProvider.interceptors.push('tokenInterceptor');
}]);

admin.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'angular/modules/admin/partials/admin.html',
      controller: 'AdminCtrl',
      access: {authed: true}
    })
    .when('/login', {
      templateUrl: 'angular/modules/admin/partials/login.html',
      controller: 'LoginCtrl',
      access: {authed: false}
    })
    .when('/users',{
      templateUrl: 'angular/modules/admin/partials/users.html',
      controller: 'UsersCtrl',
      access: {authed: true}
    })
    .when('/users/:user',{
      templateUrl: 'angular/modules/admin/partials/user.html',
      controller: 'UserCtrl',
      access: {authed: true}
    })
    .when('/new/users',{
      templateUrl: 'angular/modules/admin/partials/new_users.html',
      controller: 'NewUserCtrl',
      access: {authed: true}
    })
    .when('/products',{
      templateUrl: 'angular/modules/admin/partials/products.html',
      controller: 'ProductsCtrl',
      access: {authed: true}
    })
    .when('/products/:product',{
      templateUrl: 'angular/modules/admin/partials/product.html',
      controller: 'ProductCtrl',
      access: {authed: true}
    })
    .when('/new/products/', {
      templateUrl: 'angular/modules/admin/partials/new_products.html',
      controller: 'NewProductCtrl',
      access: {authed: true}
    })
    ;
}]);

admin.run(['$rootScope', '$location', '$window',function($rootScope, $location, $window){
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute){
    if(nextRoute.access == true && !$window.sessionStorage.token){
      $location.path('#/login');
    }
  })
}])
