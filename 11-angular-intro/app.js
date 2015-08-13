angular
    .module('myApp', [
        'myDataModule',
        'intelHoverModule',
        'intelPersonPanelModule'
    ])
    .controller('myController', function($scope, myData) {
        myData.getData().then(function(data) {
            $scope.people = data;
        });

        $scope.selectPerson = function(person) {
            var alreadySelected = person.selected;

            $scope.people.forEach(function(person) {
                person.selected = false;
            });

            person.selected = !alreadySelected;

            $scope.selectedPerson = person.selected && person;
        };
    })
;
