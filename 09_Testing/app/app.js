angular
    .module('myApp', [])
    .controller('myController', function($scope, myCalculator) {
        $scope.add = function() {
            $scope.sum = +$scope.a + parseInt($scope.b);
        };

        this.add2 = $scope.add2 = function(a, b) {
            return +a + parseInt(b);
        };

        $scope.add3 = function(a, b) {
            return myCalculator.add(a, b);
        };
    })
    .factory('myCalculator', function() {
        return {
            add: function(a, b) {
                return +a + parseInt(b);
            }
        };
    })
    .factory('myData', function($http) {
        return {
            getAll: function() {
                return $http.get('/api/data').then(function(response) {
                    return response.data.map(function(datum) {
                        return datum.toUpperCase();
                    });
                });
            }
        };
    })
;












//
