var events = require('events');
var util = require('util');

function MyAPI() {
    events.EventEmitter.call(this);
}

util.inherits(MyAPI, events.EventEmitter);

MyAPI.prototype.doWork = function() {
    this.emit('work', 'starting work...');

    var count = 0;
    // var self = this;
    var id = setInterval(function() {
        this.emit('work', 'still working...');

        if (++count === 5) {
            clearInterval(id);
        }
    }.bind(this), 1000);
};

// module.exports = MyAPI;

var api = new MyAPI();

api.on('work', function(message) {
    console.log(message);
});

api.doWork();








//
