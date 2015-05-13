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


    app.controller('moviesListController', function ($scope, $http) {

        $http.get('/api/movies').then(function (e) {
            $scope.movies = e.data;
        })
    });


    app.controller('movieEditController',
        function ($scope, $routeParams, $location, $http) {

        $http.get('/api/movies/' + $routeParams.id).then(function (e) {
            $scope.movie = e.data;

        });

        $scope.save = function () {
            $http.put('/api/movies/' + $routeParams.id, $scope.movie).then(function(){
                $location.path('/movies')

            }, function(e){
                console.log(e);
            })
        }

    });
})();

