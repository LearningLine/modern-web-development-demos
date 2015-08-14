angular
    .module('myApp', [])
    .controller('myController', function($scope, myService) {
        $scope.name = 'Jason';

        $scope.personClicked = function() {
            $scope.personActivated = true;
        };
    })
    .factory('myService', function($http, $q) {
        return {
            getData: function() {
                return $http.get('/api/data').then(function(res) {
                    if (res.data.error) {
                        // throw new Error(res.data.error);
                        return $q.reject(new Error(res.data.error));
                    }

                    return res.data;
                });
            }
        };
    })
;
