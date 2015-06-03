/**
 * Created by Maurice on 6/3/2015.
 */


(function(){
    var app = angular.module('demoApp',['ngResource']);


    app.factory('Movie', function($resource){
        return $resource('/api/moviesx');
    });

    app.controller('BooksController', function($scope, Movie){

            $scope.movies = Movie.query();
        console.log(JSON.stringify($scope.movies))
        console.log($scope.movies)

        $scope.movies.$promise.then(function(){
            console.log('Movies loaded')
        }, function(e){
            console.log('Movies not loaded', e)
        })

        //$scope.save = function(){
        //
        //    $http.put('/api/movies/771028554', {title:'The new movie'})
        //}
    });


}());