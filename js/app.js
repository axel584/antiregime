'use strict';
 
angular.module('myApp', ['ngRoute','myApp.accueil']).
config(['$routeProvider', function($routeProvider) {
   $routeProvider.otherwise({
        redirectTo: '/accueil'
    });

}]);