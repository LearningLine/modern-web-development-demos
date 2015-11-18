/// <reference path="../../Scripts/angular.js" />

(function () {
    "use strict";
    var app = angular.module("myData", []);

    app.factory("Movie", function ($http) {
        return {
            query: function () {
                return $http.get('/api/movies').then(function(res) {
                    var movies = res.data;

                    console.log(movies);

                    // movies = movies.map(function(movieData) {
                    //     return new Movie(movieData);
                    // });

                    movies.forEach(function (movie) {
                        movie.$save = function () {
                            return {
                                then: function (success) {
                                    alert("Saving " + movie.title);
                                    success();
                                }
                            };
                        };
                    });

                    return movies;
                });
            }
        };
    });

    app.factory("Country", function () {
        return {
            query: function () {
                return [{
                    "id": 1,
                    "name": "France"
                }, {
                    "id": 2,
                    "name": "United States"
                }, {
                    "id": 3,
                    "name": "Canada"
                }];
            }
        };
    });

    app.factory("Director", function () {
        return {
            query: function () {
                return [{
                    "id": 1,
                    "name": "Alexander Payne"
                }, {
                    "id": 2,
                    "name": "Sydney Pollack"
                }, {
                    "id": 3,
                    "name": "George Cukor"
                }, {
                    "id": 4,
                    "name": "Spike Jonze"
                }, {
                    "id": 5,
                    "name": "Atom Egoyan"
                }];
            }
        };
    });
}());
