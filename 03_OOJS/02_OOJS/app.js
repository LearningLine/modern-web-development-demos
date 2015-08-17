
//function personFactory(name, age) {
//    var p = {
//        name: name,
//        age: age,
//        speak: function () {
//            console.log(this.name + " is " + this.age + " years old");
//        }
//    };
//    return p;
//}

//var brock = personFactory("Brock", 23);
//brock.speak();

//function Person(name, age) {
//    this.name = name;
//    this.age = age;
//    this.speak = function () {
//        console.log(this.name + " is " + this.age);
//    }
//}

//var brock = new Person('Brock', 23);
//brock.speak();

//var brock = {};
//Person.call(brock, 'Brock', 23);

//function Person(name, age) {
//    this.name = name;
//    this.age = age;
//}
//Person.prototype.speak = function () {
//    console.log(this.name + " is " + this.age + " yahoo!");
//}
//Person.prototype.toString = function () {
//    return "my own toString! " + this.name;
//}


//var brock = new Person('Brock', 23);
//brock.speak();
//brock.toString = function () {
//    return "brock's toString";
//}
//console.log(brock.toString());
//delete brock.toString;
//console.log(brock.toString());

////Person.prototype.toString = function () {
////    return "my own toString version22222! " + this.name;
////}

//var alice = new Person('Alice', 23);
//alice.speak();
//console.log(alice.toString());

//Array.prototype.reduce = function () {
//    return 5;
//}

//function add() {
//    return Array.prototype.reduce.call(arguments, function (v1, v2) {
//        return v1 + v2;
//    });
//}
//var r = add(2, 3, 4, 5);
//console.log(r);

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.speak = function () {
    console.log(this.name + " is " + this.age + " yahoo!");
}

function Developer(name, age, language) {
    Person.call(this, name, age);
    this.language = language;
}
Developer.prototype = Object.create(Person.prototype);

Developer.prototype.code = function () {
    console.log(this.name + " is coding in " + this.language);
}

var b = new Developer("Brock", 23, "C#");
b.speak();
b.code();

console.log(b instanceof Object);
console.log(b instanceof Person);
console.log(b instanceof Developer);
console.log(b instanceof Array);
console.log(b instanceof Date);

