/// <reference path="angular.min.js" />

(function () {

    var app = angular.module("app", []);

    app.controller("ProductsCtrl", function ($scope, $http) {

        $http.get("/products").then(function (response) {
            var data = response.data;
            $scope.products = data;
        });

        $scope.edit = function (p) {

            $scope.message = null;

            $http.get("/products/" + p.id).then(function (response) {
                $scope.current = response.data;
            });
        }

        $scope.save = function (p) {

            $http.put("/products/" + p.id, p).then(function () {
                $scope.current = null;
                $scope.message = "Product ID: " + p.id + " updated";
            });

        }
    });

})();