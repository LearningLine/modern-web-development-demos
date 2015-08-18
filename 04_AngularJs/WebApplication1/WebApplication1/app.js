/// <reference path="angular.min.js" />

var mod = angular.module("fcmaApp.Demo1", []);

mod.controller("PersonCtrl", function ($scope, $rootScope) {
    console.log("PersonCtrl was called!");
    
    $scope.person = {
        name: "Brock", age: 34,
        children: [
            { name: 'Mira' },
            { name: 'Alice' },
            { name: 'Bob' },
            { name: 'Tess' }
        ]
    };

    $scope.removeKid = function (person, idx) {
        person.children.splice(idx, 1);
    }

    $scope.save = function (person, acceptTerms) {
        console.log("saving person!", person, acceptTerms);
    }

    $scope.isValid = function (person) {
        return person.age >= 21 && person.name;
    }
});

mod.controller("InnerCtrl", function ($scope) {

});
