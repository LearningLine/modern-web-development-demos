'use strict';

var person = {
    name: 'Jason',
    speak: function() {
        console.log('Hi, my name is %s!', this.name);
    }
};

person.speak();

var person2 = makePerson('Alice');
person2.speak();

function makePerson(name) {
    var privateVar = 123;

    return {
        name: name,
        speak: function() {
            makePerson.staticVar = 'bar';
            privateVar++;
            console.log(privateVar);
            console.log('Hi, my name is %s!', this.name);
        }
    };
}

function Person(name) {
    // if (!(this instanceof Person)) {
    //     console.warn('Hey, dummy, you forgot new!');
    //     return new Person(name);
    // }

    Person.instanceCount++;
    console.log(Person.instanceCount);

    this.name = name;

    var privateVar = 123;
    this.method = function() {
        console.log(privateVar);
    };

    var privateStuff = {
        privateVar: 123
    };

    this.getPrivate = function(name) {
        return privateStuff[name];
    };

    this._privateVar = 123;

    // return this;
}

Person.instanceCount = 0;

Person.prototype.speak = function() {
    console.log('Hi, my name is %s!', this.name);
};

// Person.prototype = {
//     constructor: Person,
//     speak: function() {},
//     sleep: function() {},
//     eat: function() {},
//     // name: 'Anonymous',
//     // someOtherVar: 123
// };

var person3 = new Person('Bob');
console.log(person3.speak());
console.log('speak' in person3);
console.log(person3.hasOwnProperty('speak'));
console.log(person3.hasOwnProperty('name'));

var person4 = new Person('Carol');
person4.speak = function() {
    console.log('Sup!');
};

person3.speak();
person4.speak();

Person.prototype.speak = function() {
    console.log('Hello there!');
};

person3.speak();
person4.speak();

console.log(person3.doWork);

Person.prototype.doWork = function() {
    console.log('working...');
};

person3.doWork();
person4.doWork();

console.log('foo'.capitalize);

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

console.log('foo'.capitalize());

Object.prototype.foo = function() {
};

for (var key in []) {
    console.log(key);
}

// _.capitalize('foo');
// _('foo').capitalize().value();
