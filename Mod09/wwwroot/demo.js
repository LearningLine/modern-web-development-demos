/**
 * Created by Maurice on 6/4/2015.
 */

(function(){

    var app = angular.module('demoApp',['demoServices']);

    app.controller('MessageController', function($scope, messageService){
        $scope.message = messageService.getGreeting();
    });

    app.controller('MoviesController', function($scope, $http){
        $http.get('/api/movies').then(function(e){
            $scope.movies = e.data;
        });
    });

    var services = angular.module('demoServices',[]);

    services.service('messageService', function(){
        this.getGreeting = function(){
            return 'Hello there :-)';
        }
    });

}());