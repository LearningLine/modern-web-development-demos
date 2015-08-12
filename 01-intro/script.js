// data types:

var bool = true;
var num = 12.34;
var str = 'abc';
var fn = function() {};
var obj = {
    name: 'Jason',
    height: 78
};
var arr = [
    'one',
    'two',
    'three'
];
var dt = new Date(2015, 7, 10);
var re = new RegExp('foo');
var re2 = /(foo|bar)/;

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof obj);
console.log(typeof arr);
console.log(typeof fn);
console.log(typeof dt);
console.log(typeof re);

// RegExps:

console.log(/foo/.test('foo'));

var dateRE = /((\d{4})-(\d{2})-(\d{2}))T((\d{2}):(\d{2}):(\d{2}))(\.\d{3}(Z|(\+|-)\d{1,4}))?/;

var match = dateRE.exec(new Date().toISOString());

if (match) {
    console.log('date: %s, time: %s', match[1], match[5]);
}

var num = 123456.00;
console.log(num.toFixed(2));

function doStuff(thing) {
    if (!Array.isArray(thing)) {
        thing = [ thing ];
    }

    thing.forEach(function(item) {
        console.log(item);
    });
}

doStuff('foo');

doStuff([ 'foo', 'bar' ]);

function makePerson(name) {
    return {
        name: name
    };
}



//
