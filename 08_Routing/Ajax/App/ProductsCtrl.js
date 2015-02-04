/// <reference path="angular.min.js" />

(function () {
    var app = angular.module("app");

    app.controller("ProductsCtrl", function ($scope, Products) {
        $scope.message = "Yay!";
        console.log("in the ProductsCtrl");

        Products.getAll().then(function (products) {
            $scope.products = products;
        });
    });


})();
