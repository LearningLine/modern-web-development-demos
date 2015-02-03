/// <reference path="angular.min.js" />

(function (angular) {

    var mod = angular.module("myApp", []);

    mod.controller("PersonCtrl", function ($scope) {
        $scope.acceptTerms = "yes";
        $scope.person = {
            name: "Jason",
            age: 23,
            children: [
                { name: "Mira" },
                { name: "Joe" },
                { name: "Fred" },
                { name: "Tess" }
            ]
        };

        $scope.removeKid = function (kid) {
            var idx = $scope.person.children.indexOf(kid);
            console.log(idx);
            $scope.person.children.splice(idx, 1);
        }

        $scope.canEditName = function (person) {
            return person.age > 0 && person.name !== "Brock";
        }

        $scope.addKid = function (name) {
            $scope.person.children.push({ name: name });
        }

        $scope.update = function (person, accept) {
            console.log("person was updated!", person, accept);
        }
    });

})(angular);
