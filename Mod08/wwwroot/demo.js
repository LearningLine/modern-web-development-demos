/**
 * Created by Maurice on 5/13/2015.
 */

(function () {

    var app = angular.module('demoApp', []);

    app.controller('dummyController', function($scope){
$scope.$watch('firstName', function (newVal, oldValue){
        console.log(oldValue, newVal);
    }
)
    });

    app.directive('setFocus', function(){
        return {
            link: function(scope, element){

                element[0].focus();

            }
        }
    });

    app.directive('addTemplate', function($rootScope){
        return {
            //template: '<span>The template code</span>'
            templateUrl: '/addTemplate.html',
            transclude: true,
            scope:true,
            link: function(scope){

                //console.log(scope.$id, scope.$parent, scope.$root, $rootScope)
                console.log(scope.$id, scope.$parent.$id)

            }
        };
    })

    app.directive('isoScope', function(){
        return {
            scope: {}
        };
    })

})();

