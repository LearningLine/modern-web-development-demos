/// <reference path="angular.min.js" />

(function () {

    var app = angular.module("app", ["ngResource"]);
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

    app.factory("ProductsSvc", function ($resource) {
        return $resource("/products/:id", {id:"@id"} , {
            'update':{
                method:'PUT'
            }
        });
    });

    app.controller("ProductsCtrl", function ($scope, ProductsSvc) {

        $scope.products = ProductsSvc.query();
        console.log($scope.products.length);

        $scope.edit = function (p) {
            $scope.message = null;
            $scope.current = ProductsSvc.get({id:p.id});
        }

        $scope.save = function (p) {
            p.$update();
            $scope.current = null;
            $scope.message = "Product ID: " + p.id + " updated";
        }
    });

})();