angular
    .module('myApp', [ 'ngResource' ])
    .controller('myController1', function($scope, $http, $q) {
        // $q.all([
        //     $http().then(function() { }),
        //     $http()
        // ]).then(function(results) {
        //
        // }).then(function() {
        //
        // }).catch(function() {
        //
        // });

        $http.get('/api/display')
            .then(function(res) {
                $scope.display = res.data;
                return res.data.toUpperCase();
            })
            .then(function(res) {

            })
        ;

        $scope.data = 'Loading...';

        // try {
        //     var data = $fakeSyncHttp();
        //     console.log(data);
        // } catch (err) {
        //     console.log(err);
        // }

        this.savePerson = function(person) {
            $http({
                url: '/api/people/1',
                method: 'POST',
                data: person
            }).then(function(res) {
                console.log(res);
            });
        };

        $http({
            url: '/api/people',
            method: 'GET'
        })
        .then(function(response) {
            console.log(response);
            $scope.data = 'We got ' + response.data.length + ' people!';
            $scope.peeps = response.data;
            $scope.person = response.data[0];
        })
        .catch(function(err) {
            console.log(err);
        });
    })
    .controller('myController2', function($scope, People) {
        $scope.peeps = People.query();
        console.log(JSON.stringify($scope.peeps));
        console.log($scope.peeps.$promise);

        $scope.updatePerson = function() {
            var person = $scope.peeps[0];
            person.name = 'new';
            person.$save();
        };
    })
    .factory('People', function($resource) {
        return $resource('/api/people/:id', {
            id: '@id'
        });
    })
;
