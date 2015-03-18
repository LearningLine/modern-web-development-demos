var app = angular.module("RPGGame", []);

//An example of a directive that has its own scope 
app.directive("spmButton", function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "templates/_spmButton.html",
        //transclude: true,
        //scope: false,
        //scope: true,
        scope: {
            myTextStyle: "@textstyle",
            //myVariableStyle: "=variablestyle",
            //buttontext: "@"
            //myFunction: "&"
        }
    }
})

//An example of a directive that sets up events on the DOM element
app.directive("redWhenHover", function () {
    return {
        restrict: "A",
        link: function (scope, element, attr) {
            element.on('mouseover', function () {
                element.addClass('red');
            });
            element.on('mouseout', function () {
                element.removeClass('red');
            })
        }
    }
})

//A directive that has a controller
app.directive("statManager", function () {
    return {
        restrict: "E",
        templateUrl: "/templates/_statManager.html",
        controller: function ($scope, Character) {
            $scope.character = Character;
            $scope.rollStats = function () {
                var stats = {
                    strength: Math.floor(Math.random() * 20),
                    intelligence: Math.floor(Math.random() * 20),
                    wisdom: Math.floor(Math.random() * 20)
                }
                $scope.character.stats = stats;
            }
        }
    }
})

//An example of a service using the "factory"
app.factory("Character", function () {
    //I must return an object/function in here
    return {
        isCreated: false,
        eat: function () {
            console.log("I'm eating")
        }
    }
    //return function() {}
});

app.factory("MonsterFactory", function () {
    return function (name) {
        return {
            name: name,
            hitPoints: 10
        }
    }
})

//app.service("Character", function () {
//    //var this = {}
//    this.isCreated = false;
//    this.eat = function () { };
//    //return this
//})

//app.constant("MYCONSTANT", "HI");
//app.value("MYVALUE", {});

//app.provider("Character", function () {
//    var myLevel = 0;
//    return {
//        $get: function () {
//            return {
//                level: myLevel,
//            }
//        },
//        setLevel: function(i) {
//             myLevel = i;
//       }
//    }
//})

app.config(function (CharacterProvider) {
   // CharacterProvder.setLevel = 10;
})

app.controller("CharacterCreateCtrl", function ($scope, $interval,
                                Character) {
    $scope.character = Character;
    $scope.character.name = null;

    //Watch the character variable, do something if changed
    //$scope.$watch("character", function () {
    //}, true);

    //Watch the character role, do something if changed
    //$scope.$watch("character.role", function () {
    //});

    //Handle the event "characterChanged"
    //$scope.$on("characterChanged", function () {
    //})

    //Create an event and send it down the scope chain
    //$scope.$emit("characterChanged");

    //Create an event and send it up the scope chain
    //$rootScope.$broadcast("characterChanged");

    //$scope.buttonStyle = "color: red";

    //Use the $interval service to get around the need to use
    //$scope.$apply()
    var timer = $interval(function () {
        $scope.character.gold = Math.floor(Math.random() * 1000);
        console.log("Changing gold:", $scope.character.gold);
    }, 1000);

    $scope.roles = [
        { name: "Fighter", hitpoints: 10 },
         { name: "Thief", hitpoints: 6 },
          { name: "Mage", hitpoints: 4 },
    ];

    $scope.createCharacter = function () {
        //Cancel the $interval timer
        $interval.cancel(timer);
        $scope.character.isCreated = true;
        console.log("Created Character");
    };
    
});


//I moved this functionality out to a directive
//app.controller("StatCtrl", function ($scope, Character) {
//$scope.character = Character;
//$scope.rollStats = function () {
//    var stats = {
//        strength: Math.floor(Math.random() * 20),
//        intelligence: Math.floor(Math.random() * 20),
//        wisdom: Math.floor(Math.random() * 20)
//    }
//    $scope.character.stats = stats;
//}
//})

