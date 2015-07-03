var homepageControllers = angular.module('homepageControllers', []);

// HOMEPAGE

homepageControllers.controller('homepageCtrl', ['$scope', '$http', 'productFactory', function($scope, $http, productFactory){
  $scope.slides = [
    {
      image: 'http://img.cache-cache.fr/products_images/prod_27336/h_robe-sans-manches-dentelle-faux-bustier-cache-cache-NOIR-front-44.jpg',
      text : 'robe courte'
    },
    {
      image: 'http://img.cache-cache.fr/products_images/prod_20945/g_robe-bustier-decollete-coeur-cache-cache-VERMILLON-onroll-1174.jpg',
      text : 'robe bustier'
    },
    {
      image: 'http://img.cache-cache.fr/products_images/prod_20985/h_robe-debardeur-droite-cache-cache-noir-onroll-44.jpg',
      text : 'robe débardeur'
    }
  ];
  productFactory.getAllProducts().success(function(products){$scope.products = products;});
}]);

homepageControllers.controller('menuCtrl', ['$scope', '$http', '$routeParams', 'productFactory', function($scope, $http, $routeParams, productFactory){
  productFactory.getAllCategories().success(function(categories){
    $scope.isCollapsed = true;
    $scope.categories = categories;
  });
}]);

homepageControllers.controller('tagCtrl', ['$scope', '$http','$routeParams', 'productFactory', function($scope, $http, $routeParams, productFactory){
  $scope.tag = $routeParams.tag;
  $scope.recherche= "";
  productFactory.getTag($routeParams.tag).success(function(products){
    $scope.products = products;
  });
  productFactory.getAllCategories().success(function(categories){
    $scope.categories = categories;
  });
}]);

homepageControllers.controller('subcatCtrl', ['$scope', '$http', '$routeParams', 'productFactory', function($scope, $http, $routeParams, productFactory){
  $scope.categorie = $routeParams.cat;
  $scope.recherche = "";
  productFactory.getCat($routeParams.cat).success(function(products){
    $scope.products = products;
  });
  productFactory.getAllCategories().success(function(categories){
    $scope.categories = categories;
  });
}]);

// USER

homepageControllers.controller('LoginCtrl', ['$scope', '$location', '$window', 'userFactory',
  function($scope, $location, $window, userFactory){
    $scope.email = '';
    $scope.password = '';
    $scope.login = function(){
      userFactory.login(email, password)
      .success(function(user){
        $window.sessionStorage.token = user.token;
      })
      .error(function(status, data){
        console.log(status);
        console.log(data);
      });
    }
  }]);

homepageControllers.controller('SignupCtrl', ['$scope', function($scope){
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

homepageControllers.controller('UserCtrl', ['$scope', '$routeParams', '$http',function($scope, $routeParams, $http){

}]);

homepageControllers.controller('DescriptionproduitCtrl', ['$scope', '$routeParams','productFactory', function($scope, $routeParams, productFactory){
 productFactory.getProduct($routeParams.product).success(function(product){
  $scope.product = product;
 });
}]);