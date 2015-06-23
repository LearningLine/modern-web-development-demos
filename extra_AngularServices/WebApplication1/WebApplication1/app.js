/// <reference path="Scripts/angular.js" />

var app = angular.module("app", []);

app.filter("foo", function () {
    return function (value) {
        return value + " was foo'd!";
    };
});

app.factory("PersonService", function ($http) {
    // closure
    var people = [
        { id:1, name: "Brock", age: 12 },
        { id:2, name: "Alice", age: 32 },
        { id:3, name: "Bob", age: 54 }
    ];

    var svc = {
        getPerson: function (id) {
            var results = people.filter(function (item) {
                return item.id == id;
            });
            return angular.copy(results[0]);
        },
        updatePerson: function (person) {

            if (person.age < 0) {
                throw new Error("Age is invalid");
            }

            var results = people.filter(function (item) {
                return item.id == person.id;
            });
            var match = results[0];
            if (match) {
                match.name = person.name;
                match.age = person.age;
            }
        }
    };
    return svc;
});

app.controller("PersonCtrl", function ($scope, PersonService) {
    $scope.id = 1;

    $scope.$watch("id", function (id) {
        if (id) {
            $scope.person = PersonService.getPerson(id);
        }
    });

    $scope.update = function (p) {
        $scope.error = null;
        try {
            PersonService.updatePerson(p);
        }
        catch (e) {
            $scope.error = e.message;
        }
    }
});
