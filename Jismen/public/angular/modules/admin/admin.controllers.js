var adminControllers = angular.module('adminControllers', []);

/****************
***** ADMIN ******
*******************/

admin.controller('AdminCtrl', [
  '$scope', '$http', '$window', '$location', 'usersFactory', 'productsFactory', 'commentsFactory',
  function($scope, $http, $window, $location, usersFactory, productsFactory, commentsFactory){


  usersFactory.getAllUsers()
  .success(function(users){$scope.users = users;})
  .error(function(err){console.log(err);});

  productsFactory.getAllProducts()
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

admin.controller('LoginCtrl', ['$scope', '$location', '$window', 'loginFactory', function($scope, $location, $window, loginFactory){
  $scope.email = "";
  $scope.password = "";

  $scope.login = function(email, password){
    loginFactory.login(email, password)
    .success(function(user){
      $window.sessionStorage.token = user.token;
    })
    .error(function(status, data){
      console.log(status);
      console.log(data);
    });
  };

  $scope.logout = function(){
    if($window.sessionStorage.token){
      delete $window.sessionStorage.token;
    }
    $location.path('#/login');
  }
}]);

/****************
***** USERS ******
*******************/

admin.controller('UsersCtrl', ['$scope', '$http', '$location', 'usersFactory', function ($scope, $http, $location, usersFactory) {
  $scope.recherche = "";

  usersFactory.getAllUsers().success(function(users){$scope.users = users;});

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

admin.controller('NewUserCtrl', ['$scope', '$location', 'usersFactory', 'productsFactory',
function($scope, $location, usersFactory, productsFactory){
  $scope.confirmPass = "";
  $scope.newUser = {
    name: "",
    firstname: "",
    address: "",
    zipcode: "",
    city: "",
    email: "",
    password: "",
    tel: ""
  }
  $scope.createUser = function(user){
    if(confirm('Créer l\'utilisateur ?')){
      // console.log(user);
      usersFactory.addUser(user);
    }
  }
}]);

/****************
**** PRODUCTS ****
*******************/

admin.controller('ProductsCtrl', ['$scope', '$http', '$location', 'productsFactory', 'categoriesFactory',
 function ($scope, $http, $location, productsFactory, categoriesFactory) {
  $scope.recherche = "";
  categoriesFactory.getAllCategories().success(function(categories){
    $scope.categories = categories;
  });

  productsFactory.getAllProducts().success(function(products){
    $scope.products = products;
  });

  $scope.selectProduct = function(product){
    $location.path('/products/'+product);
  };
}]);

admin.controller('ProductCtrl', ['$scope', '$location','$http', '$routeParams', 'productsFactory', function($scope, $location, $http, $routeParams, productsFactory){
  productsFactory.getProduct($routeParams.product).success(function(product){
    $scope.product = product;
    $scope.master = angular.copy(product);
  });

  $scope.modify = function(product){
    if(confirm('Enregistrer les modifications ?')){
      $http.put('/api/product', {product:product});
      $scope.master = angular.copy(product);
    }
  };

  $scope.reset = function(){
    $scope.product = angular.copy($scope.master);
  };

  $scope.delete = function(product){
    if(confirm('Supprimer cet article ?')){
      $http.delete('/api/product/'+product._id);
      $location.path('/products');
    }
  };
}]);

admin.controller('NewProductCtrl', ['$scope', '$location', 'productsFactory', 'categoriesFactory',
function($scope, $location, productsFactory, categoriesFactory){
  $scope.subcats = [];
  categoriesFactory.getAllCategories().success(function(categories){
    categories = categories;
    categories.forEach(function(cat){
      cat.subcat.forEach(function(subcat){$scope.subcats.push(subcat);});
    });
  });
  $scope.addProduct = function(product){
    if(confirm('Enregistrer le nouvel article ?')){
      productsFactory.addProduct(product);
      $location.path('/products')
    }
  };
}]);
