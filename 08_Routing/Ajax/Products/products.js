/// <reference path="angular.min.js" />

(function () {
    var app = angular.module("ProductsMod", []);

    app.factory("Products", function ($http) {
        return {
            getAll: function () {
                return $http
                    .get("/products")
                    .then(function (response) {
                        return response.data;
                    });
            },
            get: function (id) {
                return $http
                    .get("/products/" + id)
                    .then(function (response) {
                        return response.data;
                    });
            }
        };
    });
})();
