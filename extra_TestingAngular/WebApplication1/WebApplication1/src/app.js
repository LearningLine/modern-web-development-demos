/// <reference path="../lib/angular/angular.js" />

var app = angular.module("app", []);

app.directive("foo", function () {
    // DDD
    // <button foo>
    return {
        restrict: 'A',
        link: function (scope, elem) {
            elem.on('click', function () {
                scope.age++;
            });
        }
    };
});

app.factory("PeopleSvc", function () {
    return {
        get: function () {
            return {
                name: "Brock"
            };
        },
        update: function (person) {
            // ...
        }
    };
});

app.controller("PersonCtrl", function ($scope, PeopleSvc) {
    $scope.person = PeopleSvc.get();

    $scope.savePerson = function (person) {
        PeopleSvc.update(person);
    }
});
