///#source 1 1 /App/app.js
/// <reference path="angular.min.js" />

(function () {
    var app = angular.module("app", ["ngRoute", "ProductsMod"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                template: '<h1>Home</h1>'
            })
            .when("/home", {
                template: '<h1>Home</h1>'
            })
            .when("/products", {
                templateUrl: 'products.html'
            })
            .when("/products/:id", {
                templateUrl: 'product.html',
                resolve:{
                    product: function (Products, $route) {
                        return Products.get($route.current.params.id);
                    }
                },
                controller: function ($scope, product) {
                    $scope.id = product.id;
                    $scope.product = product;
                }
            })
            //.when("/products/:id", {
            //    templateUrl: 'product.html',
            //    controller: function ($scope, $routeParams, Products) {
            //        $scope.id = $routeParams.id;
            //        Products
            //            .get($routeParams.id)
            //            .then(function (product) {
            //                $scope.product = product;
            //            });
            //    }
            //})
            .otherwise({
                //template: '<h1>Not Found</h1>'
                template: '',
                //redirectTo:""
                controller:"NotFoundCtrl"
            });
        ;

    });

    function NotFoundCtrl($window) {
        $window.location = "other.html";
        //$location.url("/other.html");
    }
    NotFoundCtrl.$inject = ["$window"];
    app.controller("NotFoundCtrl", NotFoundCtrl);
    //app.run();

    app.controller("ProductsCtrl", ["$scope", "Products", function ($scope, Products) {
        $scope.message = "Yay!";
        console.log("in the ProductsCtrl");

        Products.getAll().then(function (products) {
            $scope.products = products;
        });
    }]);


})();

///#source 1 1 /App/ProductsCtrl.js
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

///#source 1 1 /App/RouteConfig.js
/// <reference path="angular.min.js" />

(function () {
    var app = angular.module("app");

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                template: '<h1>Home</h1>'
            })
            .when("/home", {
                template: '<h1>Home</h1>'
            })
            .when("/products", {
                templateUrl: 'products.html'
            })
            .when("/products/:id", {
                templateUrl: 'product.html',
                resolve:{
                    product: function (Products, $route) {
                        return Products.get($route.current.params.id);
                    }
                },
                controller: function ($scope, product) {
                    $scope.id = product.id;
                    $scope.product = product;
                }
            })
            //.when("/products/:id", {
            //    templateUrl: 'product.html',
            //    controller: function ($scope, $routeParams, Products) {
            //        $scope.id = $routeParams.id;
            //        Products
            //            .get($routeParams.id)
            //            .then(function (product) {
            //                $scope.product = product;
            //            });
            //    }
            //})
            .otherwise({
                //template: '<h1>Not Found</h1>'
                template: '',
                //redirectTo:""
                controller:"NotFoundCtrl"
            });
        ;

    });

    app.controller("NotFoundCtrl", function ($window) {
        $window.location = "other.html";
        //$location.url("/other.html");
    });


})();

