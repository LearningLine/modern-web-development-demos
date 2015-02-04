
angular
    .module('myApp', [])
    .controller('myController', function($scope) {
        $scope.defaultShowOn = 'button';

        $scope.pageLoad = new Date();

        $scope.person = {
            birthday: null
        };

        $scope.logPerson = console.log.bind(console);

        $scope.dateChanged = function() {
            console.log('changed');
        };
    })
    .directive('myTimeFromNow', function($interval) {
        // Directive Definition Object (DDO)
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                // var varName = attrs.myTimeFromNow;
                // var dt = scope[varName];
                // element.text(moment(dt).fromNow());

                var dt = scope.$eval(attrs.myTimeFromNow);
                element.text(moment(dt).fromNow());

                // setInterval(function() { console.log('hello'); }, 5000);

                $interval(function() {
                    // console.log('tick');
                    element.text(moment(dt).fromNow());
                }, 1000);

                scope.$watch(attrs.myTimeFromNow, function() {
                    dt = scope.$eval(attrs.myTimeFromNow);
                });
            },
            // controller: function($scope, $element) {
            //     console.log($element);
            // }
        };
    })
    // Web Components
    .directive('myDatePicker', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            // scope: true,
            // isolate scope:
            scope: {
                // showOn: '@myDatePickerShowOn', // raw content
                showOn: '=myDatePickerShowOn', // code content
                onChange: '&myDatePickerOnChange' // compiled to function
            },
            link: function(scope, element, attrs, ngModel) {
                element.datepicker({
                    showOn: scope.showOn
                });

                var oldSetViewValue = ngModel.$setViewValue;

                ngModel.$setViewValue = function(val) {
                    element.datepicker('setDate', element.val());
                    oldSetViewValue.call(ngModel, element.datepicker('getDate'));
                };
            }
        };
    })
;












//
