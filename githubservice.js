(function(){
  
  var githubservice = function($http, $routeParams){
    
    var getUser = function(username){
        return $http.get("https://api.github.com/users/" + username)
          .then(function(response){
            return response.data;
          });
        
    };
    
    var getRepo = function(user){
      return $http.get(user.repos_url).then(function(response){
        return response.data;
      });
    };
    
   
    var getContributors = function(repos, repo){
     return $http.get("https://api.github.com/repos/"+ repos + "/" + repo + "/contributors")
           .then(function(response){
             return response.data;
           });
    };
    
    return {
      getUser: getUser,
      getRepo: getRepo,
      getContributors: getContributors,
    };
  };
  
  var module =  angular.module("githubViewer")
  module.factory("githubservice", githubservice);
}());