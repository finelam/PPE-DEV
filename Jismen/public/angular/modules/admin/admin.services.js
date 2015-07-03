var adminServices = angular.module('adminServices', []);

/***********************
********* LOGIN *********
**************************/

adminServices.factory('loginFactory', ['$http', function($http){

  return {
    login: function(email, password){
      return $http.post('/api/user/auth/', {email:email, password:password});
    },

    logout: function(){
    }
  }
}]);

/***********************
********* AUTH **********
**************************/

adminServices.factory('authFactory', function(){
  var auth = {
    islogged: false
  };
  return auth;
});

/***********************
****** INTERCEPTOR ******
**************************/

adminServices.factory('tokenInterceptor', ['$q', '$window', 'authFactory', function($q, $window, authFactory){
  return {
    request: function(config){
      config.headers = config.headers || {};
      if($window.sessionStorage.token){
        config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
      }
      return config;
    },

    requestError: function(rejection){
      return $q.reject(rejection);
    },

    response: function(response){
      if(response != null && response.status == 200 && $window.sessionStorage.token && !authFactory.isLogged){
        authFactory.isLogged = true;
      }
      return response || $q.when(response);
    },

    responseError: function(rejection){
      if(rejection != null && rejection.status == 401 && ($window.sessionStorage.token || authFactory.isLogged)){
        delete $window.sessionStorage.token;
        authFactory.isLogged = false;
        $location.path('#/login');
      }
      return $q(rejection);
    }
  };
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
      return $http.delete('/api/user/'+user);
    },
    addUser: function(user){
      return $http.post('/api/user/',{user: user});
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
    },
    addProduct: function(newProduct){
      // console.log(newProduct);
      return $http.post('/api/product', {newProduct:newProduct});
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
