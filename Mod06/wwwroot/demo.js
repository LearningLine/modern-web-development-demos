/**
 * Created by Maurice on 6/3/2015.
 */


(function(){

    var module = angular.module('demoApp', []);

    module.controller('DemoController', function($scope, theService){

        $scope.model = {
            firstName : 'Me'
        };

        $scope.cats = [
            {name: 'Zorro', x:'xxxxxxx'},
            {name: 'Diego'},
            {name: 'Sara'}
        ];

        $scope.$watch('model.firstName', function(newValue){
            console.log(newValue)

        })

        $scope.showMe = function(){
            alert($scope.model.firstName);
        }


        $scope.changeMe = function(){
            $scope.model.firstName = 'Maurice';
        }
    });


    module.service('theService', function(){

    })
}());