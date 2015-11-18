/// <reference path="../../Scripts/angular.js" />

(function () {
    "use strict";
    var app = angular.module("myApp", ["myData"]);

    app.controller("MoviesCtrl", ["$scope", "Movie", "Director", "Country",
        function ($scope, Movie, Director, Country) {
            $scope.errorMessage = null;
            $scope.selectedMovie = null;
            $scope.thisYear = new Date().getFullYear();

            Movie.query().then(function(movies) {
                $scope.movies = movies;
                console.log(movies);
            });

            $scope.directors = Director.query();
            $scope.countries = Country.query();

            $scope.select = function (movie) {
                $scope.errorMessage = null;
                $scope.selectedMovie = movie;
            };

            $scope.save = function () {
                $scope.selectedMovie.$save().then(function() {
                    $scope.selectedMovie = null;
                }, function (e) {
                    $scope.errorMessage = e.data.error;
                });
            };

            $scope.cancel = function () {
                $scope.selectedMovie = null;
            };
        }
    ]);
}());
