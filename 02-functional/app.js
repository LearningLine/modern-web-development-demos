'use strict';

function foo() {
  var x = 1
    , y = 2
    , z = function() {}
    ;

  z(x, y);
}

var num = 123;
var str = 'abc';
var bool = true;
var arr = [];
var obj = {};
var fn = function() {}; // function expression

// functions as first-class values/objects/citizens
// higher-order functions

var myComparer = function(a, b) {
  // if (a.length < b.length) {
  //   return -1;
  // } else if (a.length > b.length) {
  //   return 1;
  // } else {
  //   return 0;
  // }
  return a.length - b.length;
};

var names = [ 'Jason', 'Angela', 'Lynn', 'Ron' ];
names.sort(myComparer);
console.log(names);

console.log(typeof fn);
console.log(typeof myComparer);

function accident() {
  foo = 'bar';
}

// console.log(foo);

// accident();
// console.log(foo);

// function declaration
function myFunction() {
  innerFunction();

  console.log(myVar);
  if (false) {
    var myVar = 'abc';
  }
  console.log(myVar);

  function innerFunction() {
    console.log('inner');
  }
}

/*
function myFunction() {
  var myVar;
  console.log(myVar);
  myVar = 'abc';
  console.log(myVar);
}
*/

myFunction();
// console.log(myVar);
