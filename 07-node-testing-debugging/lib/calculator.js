var Promise = require('bluebird');

module.exports = Calculator;

function Calculator() {
}

Calculator.prototype.add = function(a, b) {
    return a + b;
};

Calculator.prototype.addCallback = function(a, b, cb) {
    setTimeout(function() {
        cb(null, a + b);
    }, 10);
};

Calculator.prototype.addAsync = function(a, b) {
    return Promise.promisify(this.addCallback)(a, b);
};
