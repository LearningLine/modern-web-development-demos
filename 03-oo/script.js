'use strict';

// class Person extends Animal {
//     public Person(name) {
//          this.name = name;
//     }
//     public void speak() {
//        console.log('Hi, my name is %s!', this.name);
//     }
// }

// function makePerson(name) {
//   return {
//     name: name,
//     speak: function() {
//       console.log('Hi, my name is %s!', this.name);
//     }
//   };
// };

function Person(name) {
  this.name = name;
}

Person.prototype.loadData = function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/data');

  var self = this;

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      self.name = xhr.responseText;
    }
  };

  xhr.load();
};

Person.prototype.speak = function() {
   console.log('Hi, my name is %s!', this.name);
};

var jason = new Person('jason');
var alice = new Person('Alice');

alice.speak = function() {
  console.log('...');
};

jason.speak();
alice.speak();

var originalSpeak = Person.prototype.speak;

Person.prototype.speak = function() {
  console.log('hacked!');
};

jason.speak();
alice.speak();

delete alice.speak;

alice.speak();

Person.prototype.speak = originalSpeak;

jason.speak();
alice.speak();

console.log(jason.name.capitalize);

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

console.log(jason.name.capitalize());

document.getElementById('clickMe').addEventListener('click', jason.speak.bind(jason));

var obj = {
  name: 'Anonymous'
};
console.log(obj.speak);
obj.wtf = jason.speak;
obj.wtf();

var paras = document.querySelectorAll('p');
var forEach = Array.prototype.forEach;
forEach.call(paras, function(para) {
  para.style.color = 'red';
});
