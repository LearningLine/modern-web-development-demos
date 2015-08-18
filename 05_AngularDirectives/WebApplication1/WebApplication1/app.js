
(function () {
    var app = angular.module('app', []);

    app.directive("fcmaPerson", function () {
        return {
            restrict: 'E',
            //template: '<h1>this is a directive</h1>',
            templateUrl:'person.html',
            replace: true,
            transclude:true,
            scope: {
                //personName: "@name"
                //personName: "=name"
                //name: "=name"
                //name : "="
                person:'='
            },
            link : function(scope, elem, attrs){
                scope.$watch("person.age", function (age, old) {
                    if (age % 10 === 0) {
                        scope.showMessage = true;
                    }
                    else {
                        scope.showMessage = false;
                    }
                });

                var btn = elem.find(".get-older");
                btn.click(function(){
                    scope.$apply(function () {
                        scope.person.age++;
                    });
                });
            }
        };
    });


    function PersonCtrl($scope) {
        $scope.person1 = {
            name: "Brock", age: 23
        };
        $scope.person2 = {
            name: "Alice", age: 43
        };
    }
    app.controller("PersonCtrl", PersonCtrl);
})();
