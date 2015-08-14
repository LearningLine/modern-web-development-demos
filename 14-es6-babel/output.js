'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Person = (function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
    }

    _createClass(Person, [{
        key: 'speak',
        value: function speak(people) {
            var _this = this;

            people.forEach(function (person) {
                return console.log('hi, %s! my name is %s.', person.name, _this.name);
            });
        }
    }]);

    return Person;
})();

var Employee = (function (_Person) {
    _inherits(Employee, _Person);

    function Employee(name, dept) {
        _classCallCheck(this, Employee);

        _get(Object.getPrototypeOf(Employee.prototype), 'constructor', this).call(this, name);
        this.dept = dept;
    }

    _createClass(Employee, [{
        key: 'work',
        value: function work() {
            console.log('hacking...');
        }
    }]);

    return Employee;
})(Person);

var jason = new Person('Jason');

jason.speak([{ name: 'Alice' }]);

Person.prototype.foo = function () {};

jason.foo();

// var fat = () => {}; // "this" is fixed to context
// var thin = () -> {}; // "this" is whatever

var foo = 'bar';
// const cantChangeMe = true;

if (true) {
    var baz = 'quux';
    console.log(baz); // quux

    if (true) {
        var _baz = 'something else';
        console.log(_baz); // something else
    }

    console.log(baz); // quux
}

// console.log(baz);

var alice = {
    firstName: 'Alice',
    lastName: 'Smith'
};

function printName1(person) {
    var firstName = person.firstName;
    var lastName = person.lastName;

    console.log('%s %s', firstName, lastName);
}

function printName2(person) {
    var firstName = person.firstName;
    var lastName = person.lastName;

    console.log('%s %s', firstName, lastName);
}

function printName3(person) {
    var given = person.firstName;
    var surname = person.lastName;

    console.log('%s %s', given, surname);
}

function printName(_ref) {
    var _ref2 = _slicedToArray(_ref, 1);

    var _ref2$0 = _ref2[0];
    var given = _ref2$0.firstName;
    var surname = _ref2$0.lastName;

    console.log('%s %s', given, surname);
}

printName([alice]);

var fibonacci = _defineProperty({}, Symbol.iterator, regeneratorRuntime.mark(function callee$0$0() {
    var pre, cur, temp;
    return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                pre = 0, cur = 1;

            case 1:
                temp = pre;

                pre = cur;
                cur += temp;
                context$1$0.next = 6;
                return cur;

            case 6:
                context$1$0.next = 1;
                break;

            case 8:
            case 'end':
                return context$1$0.stop();
        }
    }, callee$0$0, this);
}));

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = fibonacci[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var n = _step.value;

        // truncate the sequence at 1000
        if (n > 1000) break;
        console.log(n);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}
