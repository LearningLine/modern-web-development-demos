//console.log("hello node!");

// 6

// string
//var x = 'hello';
//console.log(x, typeof x);

// number
//var x = .1 + .2;
//console.log(x, typeof x);
// C#: int == System.Int32
// long, short, float, double, decimal

// boolean
/*
    var x = true;
    console.log(x, typeof x);
*/

// function
//var x = function (a, b) {
//    return a + b;
//};
//function x(x, y) {
//    return x * y;
//}
//var result = x(2, 3);
//console.log(x, typeof x, result);

// object
//var x = {
//    //name: 'Brock',
//    age: 23, nice: true,
//    spouse: { name: 'Jess' },
//    speak: function () {
//        console.log("i'm speaking!")
//    }
//};
//x.name = "Joe";
//x["name"] = "Fred";
//x.spouse.name = "Jane";
//x.speak();
//var f = x['speak'];
//f();

//var x = new Date();
//console.log(typeof x, x);

//var x = [1, 2, 3, "four", {}, false, []];
//console.log(typeof x, x);

//var x = ["a", "b", "c", "d"];
//x.shift();
//x.unshift('d');
//var d = x.shift();
//x.push("d");
//var d = x.pop();
//console.log(d);
//x.splice(1, 2);
//x.splice(1, 0, 'e', 'f', 'g', 'h');
//for (var i = 0; i < x.length; i++) {
//    console.log(x[i]);
//}

//var x;
//console.log(x, typeof x);

//var f = function(a, b) {
//    a + b;
//}
//var r = f(1);
//console.log(r, typeof r);

//var f = function(a, b) {
//    a + b;
//    return null;
//}
//var x = f(1, 2);
//console.log(x, typeof x);
// truthy: !falsy
// falsy: false, null, undefined, 0, NaN, ''
//var x = ' ';
//if (x) {
//    console.log('truthy', x);
//}
//else {
//    console.log('falsy', x);
//}

//var x = '5';
//var y = 5;
//if (x === y) {
//    console.log('same')
//}
//else {
//    console.log('not same')
//}

//var x = ['a', 'b', 'c', 'd'];
//var x = { name: 'Brock', age: 23 };
//for (var key in x) {
//    console.log(key, x[key]);
//}

//x = 20;
//console.log(window.x);
//x = 20;
//window.x = 20;
//global.x = 20;

function work() {
    //'use strict';

    //var x = 20;

    work2();

    function work2() {
        x = 10;
        console.log(x);
    }
}

work();
console.log(x);
