//var x = 1 + 2;
//console.log(x);

// 6 data types:
// number, boolean, string, 
// function, object, undefined

//var a = 110.1 + .2;
//a = a.toFixed(2);
//console.log(a, typeof a);

//var s = "O'Grady duh!";
//console.log(s, typeof s);

// var o = { name:"Brock"};
// o.age = 5;
// o['age'] = 10;
//o.age = null;
//delete o.age;
//console.log(o, typeof o);

// var y = ["apple","bob","cat"];
// for(var i = 0; i < y.length; i++){
	// console.log(y[i]);
// }
//y[0];

//console.log(typeof y);

// for(var key in o){
	// console.log(key, o[key]);
// }

// var b = false;
// console.log(b, typeof b);

// var add = function(a, b){
	// return a + b;
// }
// var r = add(3, 4);
// console.log(r, typeof add);

// function add(a, b){
	// console.log(b);
	// return a + b;
// }
// var x = add("4", "bob");
// console.log(x, typeof x);

// falsy: undefined, null, false
// 0, NaN, ""
// truthy: !falsy
// var a = 10;
// var b = +"5";
// var x = [];
// console.log(x, typeof x);
// if (x){
	// console.log("truthy")
// }
// else{
	// console.log("falsy")
// }
// JSON
// {name:"Brock", age:5}
// var a = false;
// var b = "0";
// if (a == b){
	// console.log("same");
// }
// else{
	// console.log("not same");
// }

//var x = 10;
//x = 10;

// IIFE
(function(){

	"use strict";

	function foo(){
		//bar();
		var x = 5;
		bar();

		function bar(){
			console.log(x);
		}
	}

	foo();
	//foo.x = 5;
	//console.log(x);
	//bar();

})();

