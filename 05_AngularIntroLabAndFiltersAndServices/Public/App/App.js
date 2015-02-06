/// <reference path="../../Scripts/angular.js" />

(function(angular) {
    "use strict";

    angular
        .module('moviesApp', [])
        .filter('fromNow', function() {
            return function(val) {
                return moment(val).fromNow();
            };
        })
        .filter('directorName', function() {
            return function(directorID) {
                var director = directors.filter(function(d) {
                    return d.id === directorID;
                })[0];

                return director && director.name || 'unknown';
            };
        })
        .controller('MoviesCtrl', [
                    '$scope', 'movieService',
            function($scope,   movieService) {
            $scope.renderTime = new Date();

            $scope.movies = movies;
            $scope.directors = directors;
            $scope.countries = countries;

            $scope.select = function(movie) {
                $scope.selectedMovie = movie;
            };

            $scope.save = function(movie) {
                // ajax does not go here
                movieService.save(movie);
                $scope.selectedMovie = null;
            };
        }])
        .service('movieService', function($http) {
            this.save = function(movie) {
                // ajax goes here
                console.log(movie);
            };
        })
        .factory('anotherMovieService', function() {
            return {
                save: function() {}
            };
        })
        .provider('directorsService', function() {
            return {
                hello: 'there',
                $get: function() {
                    return {
                        save: function() {}
                    };
                }
            };
        })
        .config(function(directorsServiceProvider) {
            console.log(directorsServiceProvider);
        })
        .run(function($http, directorsService) {
            console.log(directorsService);
        })
    ;
}(angular));


// angular loads
// runs all config blocks
// create services
// runs all run blocks









//
