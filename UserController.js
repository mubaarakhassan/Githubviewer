// Code goes here
(function() {
  var app = angular.module("githubViewer");

  var UserController = function($scope, githubservice, $routeParams, $location) {

    var onUserComplete = function(data) {
      $scope.user = data;
      githubservice.getRepo($scope.user).then(onRepos);
    };

    var onRepos = function(data) {
      $scope.repos = data;
    };
   
    
    $scope.repoSortOrder = '-stargazers_count';
    $scope.username = $routeParams.username;
    
     $scope.redirectToRepoContributors = function(repo){
      $location.path("/repos/"+ $scope.username + "/" + repo +"/contributors");
    };
    githubservice.getUser($scope.username).then(onUserComplete);
  };
  app.controller("UserController", UserController);

}());