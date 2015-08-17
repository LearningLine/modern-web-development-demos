

////console.log('hello foo!')

//var f1 = function () {
//    console.log('this is the code')
//}
//var f2 = f1;
//f2();

//function doMath(f, a, b) {
//    return f(a, b);
//}
//function add(x, y) {
//    return x + y;
//}
//function mul(x, y) {
//    return x * y;
//}
//var r = doMath(mul, 2, 3);
//var r = doMath(function (a, b) {
//    return b - a;
//}, 2, 3);
//console.log(r);

//function getCounter(){
//    var count = 0;
//    return function(){
//        count++;
//        return count;
//    }
//}
//var c = getCounter();
//var r = c();
//console.log(r);
//var r = c();
//console.log(r);
//var r = c();
//console.log(r);

//var c2 = getCounter();
//console.log(c2());

//function add(a,b,c) {
//    var sum = 0;
//    for (var i = 0; i < arguments.length; i++) {
//        sum += arguments[i];
//    }
//    return sum;
//}
//console.log(add.toString());
//var r = add(2, 3, 4, 5);
//console.log(r);

//function doFib(a, b) {
//    return doFib(a - 1, a - 2);
//}

//doMath(doFib, 2, 3);
//doMath(function tmp(a, b) {
//    // how do i recurse?
//    return tmp(a - 1, a - 2);
//}, 2, 3);
////tmp();

// IIFE
(function () {
    'use strict';

    //function add() {
    //}

    //function mul() {
    //}

    //window.myCode = {
    //    add: add
    //}

    //var people = [
    //    { name: 'Brock', age:42 },
    //    { name: 'Alice', age:56 },
    //    { name: 'Bob', age:23 }
    //];
    //people.forEach(function (item) {
    //    console.log(item.name);
    //});
    //var old_people = people.filter(function (item) {
    //    return item.age >= 40;
    //});
    //var names = old_people.map(function (item) {
    //    return item.name;
    //});
    //console.log(names);

    //var oldest = people.reduce(function (item1, item2) {
    //    //console.log(item, oldest_so_far);
    //    if (item1.age > item2.age) {
    //        return item1;
    //    }
    //    return item2;
    //});
    //console.log(oldest.age);

    //var old_people = people.filter(item => item.age >= 40);
    //console.log(old_people);
    //for (var i = 0; i < people.length; i++) {
    //    console.log(people[i].name);
    //}

    //function sayHi(a, b, c) {
    //    console.log('Hi my name is ' + this.name);
    //}
    ////sayHi();

    //var brock = {
    //    name:'Brock'
    //};
    //sayHi.call(brock, 1, 2, 3);
    //sayHi.apply(brock, [1, 2, 3]);

    //function add() {
    //    //var sum = 0;
    //    //arguments.forEach(function (item) {
    //    //    sum += item;
    //    //});
    //    //return sum;

    //    return [].reduce.call(arguments, function (current, next) {
    //        return current + next;
    //    });
    //}
    //var r = add(2, 3, 4, 5);
    //console.log(r);

    //for (var i = 1; i <= 3; i++) {
    //    var b = document.getElementById('button_' + i);

    //    // IIFE
    //    (function (i) {
    //        b.addEventListener("click", function () {

    //            console.log("button #" + i + " was clicked!");

    //        }, false);
    //    })(i);
    //}

    //for (let i = 0; i < 3; i++) {
    //}
})();

