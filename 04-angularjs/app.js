angular
  .module('MyApp', [ 'PeopleModule' ])
  .controller('MyController', function($scope, PeopleService) {
    $scope.name = 'Jason';

    $scope.submitName = function() {
      console.log($scope.name);
    };

    $scope.things = [
      'foo',
      'bar',
      'baz'
    ];

    $scope.people = PeopleService.getPeople();

    $scope.selectedPerson = $scope.people[0];

    $scope.showPerson = function() {
      console.log($scope.selectedPerson);
    };
  })
;
