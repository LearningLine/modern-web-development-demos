class Person {
    constructor(name) {
        this.name = name;
    }

    speak(people) {
        people.forEach(person => console.log('hi, %s! my name is %s.', person.name, this.name));
    }
}

class Employee extends Person {
    constructor(name, dept) {
        super(name);
        this.dept = dept;
    }

    work() {
        console.log('hacking...');
    }
}

var jason = new Person('Jason');

jason.speak([ { name: 'Alice' } ]);

Person.prototype.foo = function() { };

jason.foo();

// var fat = () => {}; // "this" is fixed to context
// var thin = () -> {}; // "this" is whatever

let foo = 'bar';
// const cantChangeMe = true;

if (true) {
    let baz = 'quux';
    console.log(baz); // quux

    if (true) {
        let baz = 'something else';
        console.log(baz); // something else
    }

    console.log(baz); // quux
}

// console.log(baz);

var alice = {
    firstName: 'Alice',
    lastName: 'Smith'
};

function printName1(person) {
    let firstName = person.firstName;
    let lastName = person.lastName;

    console.log('%s %s', firstName, lastName);
}

function printName2(person) {
    let { firstName, lastName } = person;

    console.log('%s %s', firstName, lastName);
}

function printName3(person) {
    let { firstName: given, lastName: surname } = person;

    console.log('%s %s', given, surname);
}

function printName([ { firstName: given, lastName: surname } ]) {
    console.log('%s %s', given, surname);
}

printName([ alice ]);

var fibonacci = {
  [Symbol.iterator]: function*() {
    var pre = 0, cur = 1;
    for (;;) {
      var temp = pre;
      pre = cur;
      cur += temp;
      yield cur;
    }
  }
}

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}
