var adminServices = angular.module('adminServices', []);

/***********************
********* USERS *********
**************************/
adminServices.factory('usersFactory', ['$http', function($http){
  return {
    allUsers: function(users, err){
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
    allProducts: function(products, err){
      return $http.get('/api/product/all');
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
