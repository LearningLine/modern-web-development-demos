/// <reference path="angular.min.js" />

(function () {

    var app = angular.module("app", []);
    //app.filter();
    //app.directive();

    //app.factory();
    //app.service();
    //app.provider();

    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push(function ($q, $rootScope) {
            return {
                'request': function (config) {
                    return $q.when(config);
                },
                'requestError': function (config) {
                    return $q.reject(config);
                },
                'response': function (response) {
                    return $q.when(response);
                },
                'responseError': function (response) {
                    $rootScope.error = "Error making ajax call";
                    return $q.reject(response);
                }
            };
        });
    });

    app.factory("ProductsSvc", function ($http) {
        return {
            getProducts: function () {

                var data = [];

                $http.get("/products").then(function (response) {
                    for (var i = 0; i < response.data.length; i++) {
                        data.push(response.data[i]);
                    }
                });

                return data;
            },
            getProduct: function (id) {
                return $http.get("/products/" + id).then(function (response) {
                    return response.data;
                });
            },
            updateProduct: function (p) {
                return $http.put("/products/" + p.id, p).then(function () {
                });
            }
        };
    });

    app.controller("ProductsCtrl", function ($scope, ProductsSvc) {

        $scope.products = ProductsSvc.getProducts();
        console.log($scope.products.length);

        //$scope.edit = function (p) {

        //    $scope.message = null;

        //    ProductsSvc.getProduct(p.id).then(function (product) {
        //        $scope.current = product;
        //    });
        //}

        //$scope.save = function (p) {

        //    ProductsSvc.updateProduct(p).then(function () {
        //        $scope.current = null;
        //        $scope.message = "Product ID: " + p.id + " updated";
        //    });

        //}
    });

})();