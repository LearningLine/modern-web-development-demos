/**
 * Created by Maurice on 5/13/2015.
 */


var app = angular.module('spaApp',['ngRoute']);


app.config(function($routeProvider){

    $routeProvider.when('/home',{
        controller: 'homeController',
        //template: '<h3>Home</h3>'
        templateUrl: 'homeTemplate.html'
    });

    $routeProvider.when('/details',{
        controller: 'detailController',
        template: '<h3>Detail</h3>'
    });
    $routeProvider.when('/details/:name',{
        controller: 'detailPersonController',
        template: '<h3>Detail {{person.name}}</h3>'
    });

    $routeProvider.otherwise({
        redirectTo:'/home'
    })

})


app.service('peopleService', function ($http) {
    this.getPeople = function() {
        //return $http.get('/api/people')

        return [
            {name: 'Maurice'},
            {name: 'Jim'},
            {name: 'Mike'},
            {name: 'Bob'},
            {name: 'Jill'}
        ];
    };
});

app.controller('homeController', function($scope, $location, peopleService){
    console.log('homeController')

    $scope.people = peopleService.getPeople();

    $scope.toDetail = function(){
        $location.path('/details')
    }

  $scope.toPersonDetail = function(person){
console.log(person);
        $location.path('/details/' + person.name)
    }

})


app.controller('detailController', function(){
    console.log('detailController')

})
app.controller('detailPersonController', function($scope, $routeParams){
    console.log('detailController')

    $scope.person ={
        name: $routeParams.name
    };

})
