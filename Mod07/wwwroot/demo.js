/**
 * Created by Maurice on 5/13/2015.
 */

(function () {

    var app = angular.module('movieApp', ['ngRoute']);


    app.config(function ($routeProvider) {

        $routeProvider.when('/movies', {
            controller: 'moviesListController',
            templateUrl: 'moviesListTemplate.html'
        });

        $routeProvider.when('/edit/:id', {
            controller: 'movieEditController',
            templateUrl: 'movieEditTemplate.html'
        });

        $routeProvider.otherwise({
            redirectTo: '/movies'
        })

    });


    app.controller('moviesListController', function ($scope) {

    });


    app.controller('movieEditController', function ($scope, $routeParams,$location) {
        
        $scope.save = function(){
            $location.path('/movies')
        }

    });
})();

