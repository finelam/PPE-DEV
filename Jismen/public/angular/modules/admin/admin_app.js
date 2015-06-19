var admin = angular.module('admin_app', ['ngRoute']);

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
      templateUrl: 'angular/modules/admin/admin.html',
      controller: 'AdminCtrl'
    })
    .when('/users',{
      templateUrl: 'angular/modules/admin/users.html',
      controller: 'UsersCtrl'
    })
    .when('/users/:user',{
      templateUrl: 'angular/modules/admin/user.html',
      controller: 'UserCtrl'
    })
    .when('/products',{
      templateUrl: 'angular/modules/admin/products.html',
      controller: 'ProductsCtrl'
    })
    .when('/product/:product',{
      templateUrl: 'angular/modules/admin/product.html',
      controller: 'ProductCtrl'
    })
    ;
}]);

/****************
***** ADMIN ******
*******************/

admin.controller('AdminCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('/api/user/all').success(function(users){
    $scope.users = users;
  });
  $http.get('/api/comment/all').success(function(comments){
    $scope.comments = comments;
  })
  $http.get('/api/product/all').success(function(products){
    $scope.products = products;
  })
}]);

/****************
***** USERS ******
*******************/

admin.controller('UsersCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
  $scope.recherche = "";

  $http.get('/api/user/all').success(function(users){
      $scope.users = users;
    });

  $scope.selectUser = function(user){
    $location.path('/users/'+user._id);
  };
}]);

admin.controller('UserCtrl', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  $scope.master = angular.copy($scope.user);

  $http.get('/api/user/'+$routeParams.user).success(function(user){
    $scope.user = user;
    $scope.master = angular.copy(user);
  });


  $scope.modify = function(user){
    $http.put('/api/user/', {user: user});
    $scope.master = angular.copy(user);
  };

  $scope.reset = function(){
    $scope.user = angular.copy($scope.master);
  };

  $scope.delete = function(user){
    $http.delete('/api/user/'+user._id);
    $location.path('/users');
  };
}]);

/****************
**** PRODUCTS ****
*******************/

admin.controller('ProductsCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
  $scope.recherche = "";
  $http.get('/api/categorie/all').success(function(categories){
    $scope.categories = categories;
  });

  $scope.selectProduct = function(product){
    $location.path('/product/'+product);
  };
}]);

admin.controller('ProductCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $http.get('/api/product/'+$routeParams.product).success(function(product){
    $scope.product = product;
    $scope.master = angular.copy(product);
  });

  $scope.modify = function(product){
    $http.put('/api/product', {product:product});
    $scope.master = angular.copy(product);
  };

  $scope.reset = function(){
    $scope.product = angular.copy($scope.master);
  };

  $scope.delete = function(product){
    $http.delete('/api/product/'+product._id);
    $location.path('/products');
  };
}]);
