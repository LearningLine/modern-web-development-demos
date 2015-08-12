(function init() {
    'use strict';

    if (false) {
        var x = 'y';
    }

    var x = 'z';

    var squared = square(2);
    // var closure = {
    //     squared: square(2);
    // };

    var myButtons = Array.prototype.slice.call(document.getElementsByTagName('button'));

    for (let i = 0; i < myButtons.length; i++) {
        myButtons[i].addEventListener('click', function() {
            alert('You clicked button # ' + (i + 1) + '!');
            // console.log(squared);
            // console.log(closure.squared);
        });
    }

    // for (var i = 0; i < myButtons.length; i++) {
    //     (function(i) {
    //         myButtons[i].addEventListener('click', function() {
    //             alert('You clicked button # ' + (i + 1) + '!');
    //             // console.log(squared);
    //             // console.log(closure.squared);
    //         });
    //     })(i);
    // }

    // myButtons.forEach(function(myButton, i) {
    //     myButtons[i].addEventListener('click', function() {
    //         alert('You clicked button # ' + (i + 1) + '!');
    //         // console.log(squared);
    //         // console.log(closure.squared);
    //     });
    // });

    // var square = function(n) {
    //     return n * n;
    // };

    function square(n) {
        return n * n;
    }
})();
