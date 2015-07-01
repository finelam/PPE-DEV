var adminServices = angular.module('adminServices', []);

/***********************
********* LOGIN *********
**************************/

adminServices.factory('loginFactory', ['$http', function($http){
  return {
    login: function(email, password){
      return $http.post('/api/user/auth/', {email:email, password:password});
    }
  }
}]);

/***********************
********* USERS *********
**************************/
adminServices.factory('usersFactory', ['$http', function($http){
  return {
    getAllUsers: function(){
      return $http.get('/api/user/all');
    },
    getUser: function(user){
      return $http.get('/api/user/'+user);
    },
    updateUser: function(user){
      return $http.put('/api/user/', {user: user});
    },
    deleteUser: function(user){
      return $http.delete('/api/user/'+user.id);
    }
  };
}]);


/***********************
******** PRODUCTS *******
**************************/
adminServices.factory('productsFactory', ['$http', function($http){
  return {
    getAllProducts: function(products, err){
      return $http.get('/api/product/all');
    },
    getProduct: function(product){
      return $http.get('/api/product/'+product);
    }
  }
}]);

/***********************
******* CATEGORIES ******
**************************/
adminServices.factory('categoriesFactory', ['$http', function($http){
  return {
    getAllCategories: function(){
      return $http.get('/api/categorie/all');
    }
  }
}]);


/***********************
******** COMMENTS *******
**************************/
adminServices.factory('commentsFactory', ['$http', function($http){
  return {
    allComments: function(comments, err){
      return $http.get('/api/comment/all');
    }
  }
}]);
