/// <reference path="angular.min.js" />

(function () {

    var app = angular.module("app", ["ngResource", "ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                template: '<h1>Hello Home Page</h1>'
            })
            .when("/products", {
                templateUrl: 'products.html',
                controller: "ProductsCtrl"
            })
            .when("/products/:id", {
                templateUrl: 'product.html',
                resolve:{
                    product: function ($http, $route) {
                        var id = $route.current.params.id;
                        return $http.get("/products/" + id).then(function (resp) {
                            return resp.data;
                        });
                    },
                    p2: function ($http, $route) {
                        var id = parseInt($route.current.params.id);
                        return $http.get("/products/" + (id+1)).then(function (resp) {
                            return resp.data;
                        });
                    },
                    p3: function ($http, $route) {
                        var id = +$route.current.params.id;
                        return $http.get("/products/" + (id+2)).then(function (resp) {
                            return resp.data;
                        });
                    }
                },
                controller: function ($scope, product, p2, p3) {
                    $scope.current = product;
                }
                //controller: function ($scope, $routeParams, $http) {
                //    var id = $routeParams.id;
                //    $http.get("/products/" + id).then(function (resp) {
                //        $scope.current = resp.data;
                //    });
                //    //$scope.current = ProductsSvc.get({ id: id });
                //}
            })
            .when("/error", {
                templateUrl: 'error.html'
            })
            .otherwise({
                //redirectTo:'/'
                template: '<h1>Page Not Found</h1>'
            });
        ;
    });

  
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

    app.controller("ProductsCtrl", function ($scope, ProductsSvc, $location) {

        $scope.products = ProductsSvc.query();
       

        $scope.edit = function (p) {
            //$scope.message = null;
            $location.path("/products/" + p.id)
        }

        //$scope.save = function (p) {
        //    p.$update();
        //    $scope.current = null;
        //    $scope.message = "Product ID: " + p.id + " updated";
        //}
    });

})();