'use strict';
 
angular.module('myApp.accueil', ['ngRoute','firebase'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/accueil', {
        templateUrl: 'js/accueil/accueil.html',
        controller: 'AccueilCtrl'
    });
}])
 
// Home controller
.controller('AccueilCtrl', ['$scope','$firebaseSimpleLogin',function($scope,$firebaseSimpleLogin) {
 
 
 var firebaseObj = new Firebase("https://popping-torch-357.firebaseio.com"); 
 var loginObj = $firebaseSimpleLogin(firebaseObj);
 
$scope.SignIn = function(event) {
    event.preventDefault();  // To prevent form refresh
    var username = $scope.user.email;
    var password = $scope.user.password;
     
    loginObj.$login('password', {
            email: username,
            password: password
        })
        .then(function(user) {
            // Success callback
            console.log('Authentication successful');
        }, function(error) {
            // Failure callback
            console.log('Authentication failure');
        });
}
 
}]);