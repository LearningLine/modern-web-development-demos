/// <reference path="angular.min.js" />

var app = angular.module("app", ["utils"]);

app.config(function (FooProvider, $httpProvider) {
    FooProvider.enableLogging = true;
});

app.run(function (Foo, $http) {

});

app.provider("Foo", function () {
    var provider = {
        $get: function(){
            return {
                getPeople: function () {
                    if (provider.enableLogging) {
                        // do some logging
                    }
                }
            };
        }
    };
    provider.enableLogging = false;
    return provider;
});



app.service("PersonSvc2", function () {
    this.getPeople = function () {

    };
});

app.factory("PersonSvc", function ($http) {
    var svc = {
        getPeople: function () {

        },
        getPerson: function (id) {

        }
    };
    return svc;
});

app.controller("PeopleCtrl", ["$scope", "$http", "PersonSvc",
    function ($scope, $http, PersonSvc) {
        $scope.people = PersonSvc.getPeople();
    }]
);

function PersonCtrl($scope, PersonSvc) {
    $scope.person = PersonSvc.getPerson(5);
}
PersonCtrl.$inject = ["$scope", "PersonSvc"];
app.controller("PersonCtrl", PersonCtrl);

