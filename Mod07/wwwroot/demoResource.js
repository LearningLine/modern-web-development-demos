/**
 * Created by Maurice on 5/13/2015.
 */

(function () {

    var app = angular.module('movieApp', ['ngRoute', 'ngResource']);

    app.factory('Movie', function ($resource) {
        return $resource('/api/movies/:id',{id: '@id'},
            {
                save: {method:'put'}
            })

    });


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


    app.controller('moviesListController', function ($scope, Movie) {
        $scope.movies = Movie.query();
        console.log($scope.movies.length);
        $scope.movies.push({title:'Fake'})
        $scope.movies.$promise.then(function(){
            console.log($scope.movies.length);
            $scope.movies.push({title:'Late Fake'})
        }, function(e){
            console.log(e)
        })
    });


    app.controller('movieEditController',
        function ($scope, $routeParams, $location, Movie) {

            $scope.movie = Movie.get({id: $routeParams.id})

            $scope.save = function () {

                $scope.movie.$save().then(function(){
                    $location.path('/movies');
                })
            }

        });
})();

