var admin = angular.module('admin_app', ['ngRoute', 'adminControllers', 'adminServices']);

admin.directive('ngConfirm', [function(){
  return{
    priority: 1,
    terminal: true,
    link: function(scope, element, attr){
      var msg = attr.ngConfirm||"Etes-vous sûr ?";
      var clickAction = attr.ngClick;
      element.bind('click', function(event){
        if(window.confirm(msg)){
          scope.$eval(clickAction)
        }
      });
    }
  };
}]);

admin.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'angular/modules/admin/partials/admin.html',
      controller: 'AdminCtrl'
    })
    .when('/users',{
      templateUrl: 'angular/modules/admin/partials/users.html',
      controller: 'UsersCtrl'
    })
    .when('/users/:user',{
      templateUrl: 'angular/modules/admin/partials/user.html',
      controller: 'UserCtrl'
    })
    .when('/products',{
      templateUrl: 'angular/modules/admin/partials/products.html',
      controller: 'ProductsCtrl'
    })
    .when('/product/:product',{
      templateUrl: 'angular/modules/admin/partials/product.html',
      controller: 'ProductCtrl'
    })
    ;
}]);
