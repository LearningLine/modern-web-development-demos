angular
    .module('intelHoverModule', [])
    .directive('intelHover', function() {
        // DDO - directive definition object
        return {
            restrict: 'A', // E - element, C - class, M - comment
            link: function(scope, element, attrs) {
                var className = attrs.intelHover;

                element
                    .on('mouseover', function() {
                        element.addClass(className);
                    })
                    .on('mouseout', function() {
                        element.removeClass(className);
                    })
                ;
            }
        };
    })
;
