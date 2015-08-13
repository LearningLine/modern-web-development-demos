(function() {

    function sayHello() {
        console.log('hello!');
    }

    if (typeof module === 'object' && module.exports) {
        module.exports = sayHello;
    }

    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return sayHello;
        });
    } else if (typeof window === 'object') {
        window.sayHello = sayHello;
    }

})();
