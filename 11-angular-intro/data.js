angular
    .module('myDataModule', [])
    .factory('myData', function($q, $http) {
        return {
            getData: function() {
                return $q.resolve([
                    { name: 'Jason' },
                    { name: 'Alice' },
                    { name: 'Bob' }
                ]);
            }
        };
    })
;
