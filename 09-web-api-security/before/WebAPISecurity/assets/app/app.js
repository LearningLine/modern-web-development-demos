/// <reference path="../libs/angular/angular.js" />

(function () {
    "use strict";

    var app = angular.module("app", ["ngRoute"]);

    app.constant("$", window.jQuery);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                controller: "HomeCtrl",
                templateUrl: "assets/templates/home.html"
            })
            .when("/login", {
                controller: "LoginCtrl",
                templateUrl: "assets/templates/login.html"
            })
            .when("/logout", {
                controller: "LogoutCtrl",
                templateUrl: "assets/templates/logout.html"
            })
            .when("/movies", {
                controller: "MoviesCtrl",
                templateUrl: "assets/templates/movies.html"
            })
            .when("/movies/:movieID", {
                controller: "MovieCtrl",
                templateUrl: "assets/templates/movie.html"
            })
            .when("/reviews", {
                controller: "ReviewsCtrl",
                templateUrl: "assets/templates/reviews.html"
            })
            .when("/reviews/:movieID", {
                controller: "MovieReviewsCtrl",
                templateUrl: "assets/templates/moviereviews.html"
            })
            .when("/reviews/:movieID/new", {
                controller: "NewReviewCtrl",
                templateUrl: "assets/templates/newreview.html"
            })
            .otherwise({
                redirectTo:"/"
            });
    });

    app.directive("clickModal", function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.on("click", function () {
                    var target = attrs.clickModal;
                    $('#' + target).modal();
                });
            }
        };
    });

    app.directive("setPathAfterDismiss", function ($location) {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                var cb = function () {
                    modal.off("hidden.bs.modal", cb);
                    var url = attrs.setPathAfterDismiss;
                    scope.$apply(function () {
                        $location.path(url);
                    });
                };
                var modal = element.closest(".modal");
                element.on("click", function () {
                    modal.on("hidden.bs.modal", cb);
                });
            }
        };
    });

    app.directive("stars", function () {
        return {
            restrict: "A",
            templateUrl: "assets/templates/stars.html",
            scope:{},
            link: function (scope, element, attrs) {
                var count = attrs.stars | 0;
                count = +count;
                scope.model = {
                    full : new Array(count),
                    empty : new Array(5 - count)
                };
            }
        };
    });

    app.factory("storage", function ($window) {
        var store = $window.localStorage;
        return {
            save: function (key, value) {
                if (value) {
                    store.setItem(key, JSON.stringify(value));
                }
                else {
                    store.removeItem(key);
                }
            },
            load: function (key) {
                var val = store.getItem(key);
                if (val) {
                    val = JSON.parse(val);
                }
                return val;
            }
        };
    });

    app.factory("authentication", function ($http, storage, $) {
        var key = "authentication.user";
        var user = storage.load(key);

        if (!user) {
            user = {
                isLoggedIn: false,
                username: null,
                token: null
            };
        }

        return {
            user: user,
            login: function (username, password) {
                return $http.post("api/token",
                    $.param({ grant_type: "password", username: username, password: password }),
                    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
                )
                    .then(function (response) {
                        user.username = username;
                        user.isLoggedIn = true;
                        // TODO: get the access token from the response body and set it 
                        // into the token property from the user object created above
                        user.token = response.data.access_token;

                        storage.save(key, user);
                    })
                    .catch(function (resp) {
                        throw "Error: " + resp.data && resp.data.error || resp.status;
                    });
            },
            logout: function () {
                user.isLoggedIn = false;
                user.username = null;
                user.token = null;

                storage.save(key, null);
            }
        };
    });

    app.factory("country", function ($http) {
        return {
            get: function () {
                return $http.get("api/countries")
                    .then(function (resp) {
                        return resp.data;
                    })
                    .catch(function (resp) {
                        throw "Error: " + response.data && response.data.message || response.status;
                    });
            }
        };
    });

    app.factory("movies", function ($http, authentication) {
        return {
            getMovies: function () {
                return $http.get("api/movies")
                    .then(function (resp) {
                        return resp.data;
                    })
                    .catch(function (resp) {
                        throw "Error: " + resp.data && resp.data.message || resp.status;
                    });
            },
            getMovie: function (url) {
                return $http.get(url)
                    .then(function (resp) {
                        return resp.data;
                    })
                    .catch(function (resp) {
                        throw "Error: " + resp.data && resp.data.message || resp.status;
                    });
            },
            getMovieById: function (id) {
                return $http.get("api/movies/" + id)
                    .then(function (resp) {
                        return resp.data;
                    })
                    .catch(function (resp) {
                        throw "Error: " + resp.data && resp.data.message || resp.status;
                    });
            },
            update: function (movie) {
                // TODO: pass the token in the authorization HTTP header
                var token = authentication.user.token;
                return $http.put("api/movies/" + movie.id,
                    movie,
                    { headers: { Authorization: 'Bearer ' + token } }
                )
                    .then(function (resp) {
                        return resp.data;
                    })
                    .catch(function (resp) {
                        throw "Error: " + resp.data && resp.data.message || resp.status;
                    });
            }
        };
    });

    app.factory("reviews", function ($http, authentication) {
        return {
            get: function (movieID) {
                return $http.get("api/reviews/" + movieID)
                    .then(function (resp) {
                        return resp.data;
                    })
                    .catch(function (resp) {
                        throw "Error: " + resp.data && resp.data.message || resp.status;
                    });
            },
            search: function (filter) {
                return $http.get("api/reviews", { params: { filter: filter } })
                    .then(function (resp) {
                        return resp.data;
                    })
                    .catch(function (resp) {
                        throw "Error: " + resp.data && resp.data.message || resp.status;
                    });
            },
            create: function (movieID, stars, review) {
                // TODO: pass the token in the authorization HTTP header
                var token = authentication.user.token;
                return $http.post(
                    "api/reviews/" + movieID,
                    { stars: stars, review: review },
                    { headers: { Authorization: 'Bearer ' + token } }
                )
                    .then(function (resp) {
                        return resp.data;
                    })
                    .catch(function (resp) {
                        throw "Error: " + resp.data && resp.data.message || resp.status;
                    });
            }
        };
    });

    app.controller("UserCtrl", function ($scope, authentication) {
        $scope.user = authentication.user;
    });

    app.controller("LoginCtrl", function ($scope, authentication) {
        $scope.model = {
            success: false,
            error : null
        };

        $scope.login = function (uid, pwd) {
            $scope.model.error = null;
            authentication.login(uid, pwd).then(
                function () {
                    $scope.model.success = true;
                },
                function (error) {
                    $scope.model.error = error;
                });
        };
    });

    app.controller("LogoutCtrl", function ($scope, authentication) {
        authentication.logout();
    });

    app.controller("HomeCtrl", function ($scope) {
    });

    app.controller("MoviesCtrl", function ($scope, $location, movies) {
        $scope.model = {
            loading:true
        };

        $scope.selectMovie = function (idx) {
            $scope.model.selectedMovie = null;
            var details = $scope.model.movies[idx].details;
            movies.getMovie(details).then(function (data) {
                $scope.model.selectedMovie = data;
            });
        };

        $scope.seeAllReviews = function (movieID) {
            $location.path("/reviews/" + movieID);
        }

        movies.getMovies().then(function (movies) {
            $scope.model.loading = false;
            $scope.model.movies = movies;
        });
    });

    app.controller("MovieCtrl", function ($scope, $routeParams, movies, country) {
        var movieID = $routeParams.movieID;

        $scope.model = {
            success: false,
            error : null
        };

        country.get().then(function (countries) {
            $scope.model.countries = countries;
            console.log(countries);
        });
        movies.getMovieById(movieID).then(function (movie) {
            $scope.model.movie = movie;
        });

        $scope.update = function () {
            $scope.model.error = null;
            $scope.model.success = false;
            console.log($scope.model.movie);
            movies.update($scope.model.movie).then(
                function () {
                    $scope.model.success = true;
                },
                function (error) {
                    $scope.model.error = error;
                }
            );
        };
    });

    app.controller("NewReviewCtrl", function ($scope, $routeParams, movies, reviews) {
        $scope.model = {
        };

        var movieID = $routeParams.movieID;
        movies.getMovieById(movieID).then(function (movie) {
            $scope.model.movie = movie;
        });

        $scope.submit = function (stars, review) {
            $scope.model.error = null;

            reviews.create(movieID, stars, review).then(
                function () {
                    $scope.model.submitted = true;
                },
                function (error) {
                    $scope.model.error = error;
                }
            );
        };
    });

    app.controller("MovieReviewsCtrl", function ($scope, $routeParams, movies, reviews) {
        $scope.model = {};

        var movieID = $routeParams.movieID;
        reviews.get(movieID).then(function (results) {
            $scope.model.results = results;
        });
        movies.getMovieById(movieID).then(function (movie) {
            $scope.model.movie = movie;
        });

        $scope.selectReview = function (idx) {
            $scope.model.selectedReview = $scope.model.results[idx];
        };
    });

    app.controller("ReviewsCtrl", function ($scope, reviews) {
        $scope.model = {};

        $scope.search = function (filter) {
            reviews.search(filter).then(function (results) {
                $scope.model.results = results;
            });
        };

        $scope.selectReview = function (idx) {
            $scope.model.selectedReview = $scope.model.results[idx];
        };
    });
})();
