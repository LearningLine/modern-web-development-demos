function Person(name, age) {
    //var this = {};
    this.name = name;
    this.age = age;
    //this.salary = salary;
    //return this;
}

Person.prototype.speak = function () {
    console.log(this.name + " say hi");
}
Person.prototype.eat = function () {
    console.log("eating");
}
Person.prototype.salary = 30000;
    
function Developer(name, age) { 
    //var this = {};
    Person.call(this, name, age);
    //this.name = name;
    //this.age = age;
    //return this;
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.code = function () {
    console.log("coding");
}

var shawn = new Developer("shawn", 21);

Person.prototype.sleep = function () {
    console.log("sleeping");
}


shawn.salary = 50000;
delete shawn.salary;
//shawn.speak();
//shawn.eat();

var amy = new Person("amy", 30);
amy.speak();