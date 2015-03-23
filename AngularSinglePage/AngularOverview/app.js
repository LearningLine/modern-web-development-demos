(function (angular) { 
    var app = angular.module("RPGGame", ['ngResource', 'ngRoute']);

//An example of a directive that has its own scope 
app.directive("spmButton", function () {
    return {
        restrict: 'E',
        replace: true,
        //template: "<html>"
        templateUrl: "templates/_spmButton.html",
        transclude: true,
        //require: "ngModel"
        //scope: false,
        //scope: true,
        scope: {
            myTextStyle: "@textstyle",
            //myVariableStyle: "=variablestyle",
            //buttontext: "@"
            //myFunction: "&"
            //clickfunction: "&"
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

//app.factory("Roles", function ($http) {
//    var roles = {};
//    $http.get('http://localhost/RPGApi/api/roles')
//    .success(function (data) {
//        roles = data;
//    })
//})

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
    

app.filter('lowercase', function () {
    return function (data) {
        return data + "1000000";
    }
})


app.config(function (CharacterProvider, $routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/_index.html'
    })
    .when('/admin', {
        templateUrl: 'templates/_admin.html',
        controller: "AdminCtrl",
        resolve: {
            Monsters: function (MonsterResource) {
                return MonsterResource.query().$promise
            }
    //          Monster: PROMISE HERE
        }
    })
    .otherwise({
        redirectTo: "/"
    })

   // CharacterProvider.setLevel(10);
})

app.controller("CharacterCreateCtrl", function ($scope, $interval,
                                Character, $http) {
    $scope.character = Character;
    $scope.character.name = null;

    var timer = $interval(function () {
        $scope.character.gold = Math.floor(Math.random() * 1000);
        //console.log("Changing gold:", $scope.character.gold);
    }, 1000);

    var promise = $http.get("http://localhost/RPGApi/api/roles");
    promise.success(function (data, status) {
        console.log("success", data);
        $scope.roles = data;
    });
    promise.error(function (status, message) {
        console.log("error", status);
    });

    $scope.roleChanged = function () {
        $http.jsonp('https://ajax.googleapis.com/ajax/services/search/images',
        {
            params: {
                v: "1.0",
                q: $scope.character.role.name,
                callback: "JSON_CALLBACK"
            }
        }).success(function (data) {
            console.log(data.responseData.results[0].url);
            $scope.roleImage = data.responseData.results[0].url;
        })
    }


    

    $scope.createCharacter = function () {
        //Cancel the $interval timer
        $interval.cancel(timer);
        $scope.character.isCreated = true;
        console.log("Created Character");
    };
    
});

app.factory("MonsterResource", function($resource) {
    return $resource('http://localhost/RPGapi/api/monsters/:id', {
        id: "@id"
    }); 
})

app.controller("AdminCtrl", function ($scope, $resource,
    $location, $routeParams, Monsters) {
    console.log($routeParams);

    $scope.goHome = function () {
        $location.url("/").search({ user: "shawn" });
    }

    $scope.monsters = Monsters;

    $scope.save = function (monster) {
        monster.$save();
    }

    $scope.delete = function (monster) {
        console.log("deleting");
        monster.$delete();
    }

    $scope.create = function (monster) {
        console.log("creating:", monster);
        newMonster = new MonsterResource(monster);
        newMonster.$save();
    }
})

})(angular)