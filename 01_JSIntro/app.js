// var x = 1 + 2;
// console.log(x);

//var x = 5;
// x = "six";
// console.log(x);

// 6 built-in types in JS
//var n = .1 + .2;
//console.log(n, typeof n);

//var s = 'hello world!';
//console.log(s, typeof s);

// var b = true;
// console.log(b, typeof b);

// var o = {
// 	name:"Brock" 
// };
// o['age'] = 12;
// //var age = o['age']; 
// //o.age = 13;
// console.log(o, typeof o);

// o.age = null;
// console.log(o, typeof o);

// delete o.age;
// console.log(o, typeof o);

// var f = function(a, b){
// 	var c = a + b;
// 	return c;
// };

// var result = f(2, 5);
// console.log(result, typeof f);

// f = function(a, b) {
// 	return  a * b;
// }
// var result = f(2, 5);
// console.log(result, typeof f);

// function f(a, b) {
// 	console.log(b);
// 	a + b;
// }

// var u = f(2, 3);
// console.log(u, typeof u);

// var d = new Date();
// console.log(d, typeof d);

//var a = ["one", "two", "three"];
//a.push("three")
//console.log(typeof a);
//console.log(a);
//var three = a.pop();
// console.log(a);
// a.unshift("zero");
// console.log(a);
// var zero = a.shift();
// console.log(a);
// var removed = a.splice(3, 0, "four", "five", "six");
// var removed = a.splice(1, 2);
// console.log(a);
// console.log(removed);

//var a = ["A", "B", "C"];
// "for in"
// var brock = {name:"Brock", age:5};
// for(var key in brock){
// 	console.log(key, brock[key]);
// }

// "use strict";

// function doSpeak(){
// 	console.log("my name is " + this.name);
// }
// doSpeak();

// var person = {
// 	name:"Brock",
// 	age:12,
// 	speak:doSpeak
// };
// person.speak();

// var person2 = {
// 	name:"Alice",
// 	age:12,
// 	speak:doSpeak
// };
// person2.speak();

// truthy: !falsy
// falsy: null, undefined, false, 0, '', NaN
// var x = {};
// if (x) {
// 	console.log('truthy', x, typeof x)
// }
// else{
// 	console.log('falsy', x)
// }

// var a = "";
// var b = false;
// if (a === b){
// 	console.log('same');
// }
// else{
// 	console.log('not same');
// }

var x = 10;

// C#/Java/C++/VB.NET: block scoped 
// JS: function scoped
function work() {
	console.log(x);
	var x = 100;
	var x = 100;
	var x = 100;
	var x = 100;
	var x = 100;
	var x = 100;
	console.log(x);
}

work();