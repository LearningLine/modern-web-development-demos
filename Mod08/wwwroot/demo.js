/**
 * Created by Maurice on 6/3/2015.
 */

(function(){

    var app = angular.module('demoApp', []);


    app.directive('setFocus', function(){
        return {
            link: function(scope, element){
                element[0].focus();
            }


        };

    })

    app.directive('demoTemplate', function(){
        return {
            transclude: true,
            templateUrl: '/demoTemplate.html'
        };
    })


}());