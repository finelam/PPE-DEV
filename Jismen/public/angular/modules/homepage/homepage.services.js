var homepageServices = angular.module('homepageServices', []);

// HOMEPAGE

homepageServices.factory('productFactory', ['$http', function($http){
  return {
    getAllProducts: function(){
      return $http.get('/api/product/all');
    },
    getAllCategories: function(){
      return $http.get('/api/categorie/all');
    },
    getTag: function(tag){
      return $http.get('/api/product/tag/'+tag);
    },
    getCat: function(cat){
      return $http.get('/api/product/cat/'+cat);
    }
  };
}])

// USER

homepageServices.factory('userFactory', ['$http', function($http){
  return {
    login: function(email, password){
      return $http.post('/api/user/auth/', {email: email, password: password});
    }
  };
}]);
