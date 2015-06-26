var adminControllers = angular.module('adminControllers', []);

/****************
***** ADMIN ******
*******************/

admin.controller('AdminCtrl', [
  '$scope', '$http', 'usersFactory', 'productsFactory', 'commentsFactory',
  function($scope, $http, usersFactory, productsFactory, commentsFactory){

  usersFactory.allUsers()
  .success(function(users){$scope.users = users;})
  .error(function(err){console.log(err);});

  productsFactory.allProducts()
  .success(function(products){$scope.products = products;})
  .error(function(err){console.log(err);});

  commentsFactory.allComments()
  .success(function(comments){$scope.comments = comments;})
  .error(function(err){console.log(err);});

  var curDate     = new Date();
  var year        = curDate.getFullYear().toString();
  var month       = curDate.getMonth() > 9 ? curDate.getMonth().toString() : '0' + curDate.getMonth().toString();
  var day         = curDate.getDate() > 9 ? curDate.getDate().toString() : '0' + curDate.getDate().toString();
  $scope.curDate  = year + '/' + month + '/' + day;

}]);

/****************
***** USERS ******
*******************/

admin.controller('UsersCtrl', ['$scope', '$http', '$location', 'usersFactory', function ($scope, $http, $location, usersFactory) {
  $scope.recherche = "";

  usersFactory.allUsers().success(function(users){$scope.users = users;});

  $scope.selectUser = function(user){$location.path('/users/'+user._id);};
}]);

admin.controller('UserCtrl', ['$scope', '$http', '$location', '$routeParams', 'usersFactory', function($scope, $http, $location, $routeParams, usersFactory){
  $scope.master = {};

usersFactory.getUser($routeParams.user).success(function(user){
    $scope.user = user;
    $scope.master = angular.copy(user);
});


  $scope.modify = function(user){
    if(confirm('Enregistrer les modifications ?')){
      usersFactory.updateUser(user);
      $scope.master = angular.copy(user);
    }
  };

  $scope.reset = function(){
    $scope.user = angular.copy($scope.master);
  };

  $scope.delete = function(user){
    if(confirm('Supprimer cet utilisateur ?')){
      usersFactory.deleteUser(user);
      $location.path('/users');
    }
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
