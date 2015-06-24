/// <reference path="Scripts/angular.js" />

// CORS cross origing resource sharing

var app = angular.module("app", []);

app.factory("ProductService", function ($http) {
    return {
        getProducts: function () {
            var promise = $http.get("http://localhost:42077/products");
            var promise2 = promise.then(function (response) {
                var products = response.data;
                return products;
            });
            return promise2;
        },
        getProduct: function (id) {
            return $http.get("http://localhost:42077/products/" + id).then(function (response) {
                return response.data;
            });
        },
        updateProduct: function (product) {
            return $http.put("http://localhost:42077/products/" + product.id, product).then(function () {
            });
        }
    };
});

app.controller("ProductsCtrl", function ($scope, ProductService) {

    ProductService.getProducts().then(function (products) {
        $scope.products = products;
        $scope.current_id = products[0].id;
    });

    $scope.changeCurrent = function (id) {
        $scope.message = null;
        ProductService.getProduct(id).then(function (prod) {
            $scope.current_product = prod;
        });
    }

    $scope.save = function (p) {
        ProductService.updateProduct(p).then(function () {
            $scope.message = "Save Success";
        });
    }

    //$http.get("http://localhost:42077/products").then(function (response) {
    //    var list = response.data;
    //    $scope.products = list;
    //    $scope.current_id = list[0].id;
    //});

    //$scope.changeCurrent = function (id) {
    //    $scope.message = null;
    //    $http.get("http://localhost:42077/products/" + id).then(function (response) {
    //        $scope.current_product = response.data;
    //    });
    //}

    //$scope.save = function (p) {
    //    $http.put("http://localhost:42077/products/" + p.id, p).then(function (response) {
    //        $scope.message = "Save Success";
    //    });
    //}
});

