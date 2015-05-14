/**
 * Created by Maurice on 5/14/2015.
 */

(function () {

    var app = angular.module('demoApp', []);

    app.factory('movieValidation', function () {
        return {
            validate: function (movie) {

                if (!movie.title) {
                    return 'No movie title';
                }

                return null;
            }
        }
    });



    app.controller('simpleController', function ($scope, movieValidation) {

        $scope.movies = [{id: 42, title: 'The AngularJS movie'}];
    });


    app.controller('httpController', function ($scope, $http, movieValidation) {
        $scope.errorMessage = '';
        $scope.movies = [];

        $http.get('/api/movies').then(function (e) {
            $scope.movies = e.data;
        });

        $scope.save = function (movie) {
            $scope.errorMessage = movieValidation.validate(movie);

            if (!$scope.errorMessage) {
                $http.put('/api/movies/' + movie.id).then(function (e) {
                    $scope.movies = e.data;
                });
            }
        }
    });

})();

