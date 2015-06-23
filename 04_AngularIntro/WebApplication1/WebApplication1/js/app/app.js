/// <reference path="../angular/angular.min.js" />

var mod = angular.module("myApp", []);

mod.controller("FooCtrl", ["$scope", "$http", function (x, y) {
}]);

mod.controller("PersonCtrl", function ($scope, $http) {
    //console.log("wow, this worked???@?!?");

    $scope.person = {
        name: "Brock",
        age: 34,
        kids: [
            { name: "Mira" },
            { name: "Tess" }
        ]
    };

    $scope.canSave = function () {
        return $scope.person.name && $scope.person.age;
    };

    $scope.saveChanges = function (person, agree) {
        //console.log("save changes was called", $scope.person);
        console.log("save changes was called", person, agree);
    };

    $scope.removeKid = function (index) {
        $scope.person.kids.splice(index, 1);
    }

    $scope.addKid = function (name) {
        $scope.person.kids.push({name:name});
    }
});