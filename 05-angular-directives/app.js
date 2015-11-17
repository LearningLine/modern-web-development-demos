angular
  .module('myApp', [])
  .controller('myController', function($scope) {
    $scope.myData = {
      customButtonText: 'Message in controller'
    };

    $scope.customClickFunction = function() {
      console.log('it got clicked');
    };
  })
  .directive('myButton', function() {
    // DDO - directive definition object
    return {
      restrict: 'E',
      // template: '<button>Click Me!</button>',
      templateUrl: 'myButton.html',
      // replace: true,
      scope: {
        buttonText: '=text',
        onClick: '&click'
      },
      link: function(scope, element, attrs) {
        console.log('linking...');

        // scope.buttonText = attrs.buttonText;

        // use DOM here...
        element.find('button').css('color', 'pink');

        element.on('click', function() {
          // alert('You clicked my directive!');

          scope.$apply(function() {
            scope.buttonText += '!';
          });

          scope.onClick();
        });

        // element[0].addEventListener('click', function(e) {
        //   e.stopPropagation();
        // }, true);
      },
      // compile: function() {
      //   // modify DOM here
      //   return function link() {
      //
      //   }
      // }
    };
  })
;
