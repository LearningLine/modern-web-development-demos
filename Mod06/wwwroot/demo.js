/**
 * Created by Maurice on 5/12/2015.
 */


(function () {
    'use strict';


    var demoApp = angular.module('demoApp', []);

    demoApp.service('peopleService', function ($http) {
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

    demoApp.controller('mainController', ['$scope', 'peopleService', function ($scope, p) {

        var model = {name: 'Jack'};

        $scope.model = model;


        $scope.$watch('model.name', function (val) {
            console.log(val);
        });


        $scope.people = p.getPeople();

    }])
})();










