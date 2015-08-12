(function() {
    'use strict';

    function Person(name) {
        this.name = name;
    }

    Person.prototype.speak = function() {
        console.log('Hi, my name is %s!', this.name);
    };

    var jason = new Person('Jason');

    var jasonSpeak = jason.speak;
    console.log(typeof jasonSpeak);
    jason.speak();
    // jasonSpeak();

    var buttons = document.querySelectorAll('button');

    console.log(buttons.constructor);
    console.log(Object.getPrototypeOf(buttons));

    // buttons.forEach = Array.prototype.forEach;
    //
    // buttons.forEach(function(button) {
    //     console.log(button);
    // });

    var forEach = Array.prototype.forEach;

    forEach.call(buttons, function(button) {
        console.log(button);
    });

    function sum() {
        console.log(arguments);
    }

    sum(1, 2, 3);

    var fakeArray = {
        0: 'one',
        1: 'two',
        2: 'three',
        length: 3,
        // forEach: Array.prototype.forEach,
        forEach: function(cb) {
            for (var i = 0; i < this.length; i++) {
                cb(this[i], i);
            }
        }
    };

    fakeArray.forEach(function(item) {
        console.log(item);
    });

    var fakePerson = {
        name: 'faker'
    };

    jasonSpeak.call(fakePerson);

    var jasonSpeak2 = jason.speak.bind(jason);

    var jasonSpeak3 = function() {
        jason.speak.call(jason);
    };
})();
