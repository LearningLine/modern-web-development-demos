angular
    .module('intelPersonPanelModule', [])
    .directive('intelPersonPanel', function() {
        // DDO - directive definition object
        return {
            restrict: 'E',
            scope: {
                person: '='
            },
            templateUrl: 'personPanel.html',
            link: function(scope, element, attrs) {
                console.log(scope.person);
            }
        };
    })
;
