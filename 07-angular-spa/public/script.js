angular
  .module('myApp', [ 'ngRoute' ])
  .run(function($rootScope) {
    $rootScope.globalStuff = 42;
  })
  .factory('myService', function($q) {
    // $q.all([ p1, p2, p3 ]).then(function(args) {
    //   var r1 = args[0];
    //   var r2 = args[1];
    //   var r3 = args[2];
    // });

    var dataPromise = null;

    return {
      getData: function() {
        return dataPromise || (dataPromise = new $q(function(resolve, reject) {
          setTimeout(function() {
            resolve('resolved');
          }, 2000);
        }));
      },
      clear: function() {
        dataPromise = null;
      }
    }
  })
  .config(function($locationProvider, $routeProvider) {
    // $locationProvider.html5Mode(true);

    $routeProvider
      .when('/page2/:first/:second', {
        templateUrl: 'page2.html',
        resolve: {
          foo: function($http) {
            return $http.get('/data.json').then(function(res) {
              return res.data;
            });
          },
          bar: function(myService) {
            return myService.getData();
          }
        },
        controller: function($scope, $routeParams, foo, bar) {
          $scope.first = $routeParams.first;
          $scope.second = $routeParams.second;
          $scope.resolvedValue = bar;
        }
      })
      .otherwise({
        // remove the # if in html5Mode:
        template: '<p>This is page 1. Go to <a href="#/page2/foo/bar">page 2<a>.</p>',
        controller: function($scope) {
        }
      })
    ;
  })
  .controller('myController', function() {
  })
;
