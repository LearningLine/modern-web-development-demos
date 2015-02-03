// Brendan Eich

// JavaScript and Self are prototypal languages
// Simula, Smalltalk, C++, Java, C#, Python, Ruby are classical languages

'use strict';

// Method 1:
// var jason = {
//     name: 'Jason',
//     age: 28,
//     speak: function() {
//         console.log('Hello, my name is %s', this.name);
//     }
// };
// jason.speak();

// Method 2:
// function makePerson(name, age) {
//     return {
//         name: name,
//         age: age,
//         speak: function() {
//             console.log('Hello, my name is %s', this.name);
//         }
//     };
// }
//
// var jason = makePerson('Jason', 29);
// var brock = makePerson('Brock', 5);

// Method 3:
// function Person(name ,age) {
//     this.name = name;
//     this.age = age;
//     // speak?
// }
// var jason = new Person('Jason', 30);

// Method 4:
// var PersonPrototype = {
//     speak: function() {
//         console.log('Hi, my name is %s', this.name);
//     }
// };
// function makePerson(name, age) {
//     var newPerson = Object.create(PersonPrototype);
//     newPerson.name = name;
//     newPerson.age = age;
//     return newPerson;
// }
// var jason = makePerson('Jason', 31);

// Method 5:
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.speak = function() {
//     console.log('%s is speaking...', this.name);
// };
// Person.prototype.sleep = function() {
//     console.log('zzz...', this.name);
// };
// Person.prototype = {
//     speak: function() {
//         console.log('Original speaker: %s...', this.name);
//     }
// };
// var jason = new Person('Jason', 32);
// var brock = new Person('Brock', 5);
// jason.speak();
// brock.speak();
// jason.speak = function() {
//     console.log('override');
//     Person.prototype.speak.call(this);
// };
// jason.speak();
// brock.speak();
// delete jason.speak;
// jason.speak();
// brock.speak();
// function Employee(name, age, dept) {
//     // super(name, age);
//     Person.call(this, name, age);
//     this.dept = dept;
// }
// Employee.prototype = new Person();
// // Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.work = function() {
//     console.log('%s is working!', this.name);
// };
// var alice = new Employee('Alice', 25, 'IT');
// alice.work();
// alice.speak();

// Method 6:
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log('Hi, my name is %s', this.name);
    }
}
var jason = window.jason = new Person('Jason', 33);

// Use the class:
document.querySelector('#speak')
    .addEventListener('click', function() {
        jason.speak();
    })
;

// Object.prototype
// Array.prototype
// Function.prototype

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

console.log('jason'.capitalize()); // Jason
