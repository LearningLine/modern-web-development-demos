/**
 * Created by Maurice on 6/3/2015.
 */


(function(){
    var app = angular.module('demoApp',[]);

    app.controller('BooksController', function($scope, $http){

        $http.get('/api/movies').then(function(e){
            $scope.movies = e.data;

        }, function(e){
            console.log('Error', e)
        });

        $scope.save = function(){

            $http.put('/api/movies/771028554', {title:'The new movie'})
        }
    });


}());