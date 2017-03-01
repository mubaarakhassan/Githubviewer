// Code goes here
(function() {
  var app = angular.module("githubViewer");

  var RepoController = function($scope, githubservice, $routeParams, $filter, $location) {
    
    var onRepoStart = function(data){
       $scope.user1 = data;
     
      githubservice.getRepo($scope.user1).then(onRepoComplete);
    } ;
    
    var onRepoComplete = function(data) {
      $scope.repoUrl = data;
      githubservice.getContributors($routeParams.username, $routeParams.repo).then(onContributors);
    };
    
    var onContributors = function(data) {
      $scope.contributors = data;
    };
      
    $scope.username = $routeParams.username;
    githubservice.getUser($scope.username).then(onRepoStart);
    
      
    $scope.search = function(username) {
     $location.path("/user/" + username);
    }
    
  };
  app.controller("RepoController", RepoController);

}());