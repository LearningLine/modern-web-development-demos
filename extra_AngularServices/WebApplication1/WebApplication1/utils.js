/// <reference path="angular.min.js" />

var utils_mod = angular.module("utils", []);

utils_mod.filter("maxlen", function () {
    return function (val, len) {
        if (val.length > len) {
            val = val.substr(0, len);
            val += "...";
        }
        return val;
    };
});

