/// <reference path="Scripts/angular.js" />

var app = angular.module("app", []);

//app.directive("lausdPerson");

app.directive("person", function () {
    return {
        restrict: 'E',
        replace:true,
        //template : '<div>Hello Person directive!</div>'
        templateUrl: 'person.html',
        scope: {
            person: '='
        },
        link: function (scope, elem, attrs) {
            // jQuery-lite/full
            var button = elem.find('.get-old-button');
            button.on('click', function () {
                scope.$apply(function () {
                    scope.person.age++;
                });
                //console.log(scope.person.age);
            });
        }
    };
});

app.controller("PersonCtrl", function ($scope) {
    $scope.person1 = {
        name: "Brock", age: 23
    };
    $scope.person2 = {
        name: "Alice", age: 23
    };

});