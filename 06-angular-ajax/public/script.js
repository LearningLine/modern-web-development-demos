angular
  .module('myApp', [ 'ngResource' ])
  .factory('PeopleService', function($resource) {
    return $resource('/api/people/:id', {
      id: '@id'
    });

    // { 'get':    {method:'GET'},
    // 'save':   {method:'POST'},
    // 'query':  {method:'GET', isArray:true},
    // 'remove': {method:'DELETE'},
    // 'delete': {method:'DELETE'} };
  })
  .controller('myController', function($scope, $http, PeopleService) {
    $scope.loadDataWithResource = function() {
      $scope.people = PeopleService.query();
      console.log($scope.people);
    };

    var isCancelled = false;

    $scope.cancel = function() {
      isCancelled = true;
    };

    $scope.createPerson = function() {
      var newPerson = {
        name: $scope.newPersonName
      };

      $http.post('/api/people', newPerson)
        .then(function(res) {
          console.log('person created');
          $scope.people.push(res.data);
        })
        .catch(function(err) {
          console.log(err);
        })
      ;
    };

    $scope.loadData = function() {
      $scope.people = null;

      // $http({ method: 'get', url: '/api/people' })
      $http.get('/api/people')
        // .success(function(people) {
        //   if (!isCancelled) {
        //     $scope.people = people;
        //   }
        // })
        .then(function(res) {
          if (!isCancelled) {
            $scope.people = res.data;
          }
        })
        .catch(function(err) {
          console.log(err);
        })
      ;
    };
  })
;
