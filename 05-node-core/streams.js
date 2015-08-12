var fs = require('fs');
var stream = require('stream');
var util = require('util');

function LineSplitter() {
    // call super contstructor:
    stream.Transform.call(this, { readableObjectMode: true });
}

util.inherits(LineSplitter, stream.Transform);

LineSplitter.prototype._transform = function(chunk, encoding, done) {
    var lines = ((this._buf || '') + chunk.toString('utf8')).split('\n');

    this._buf = lines.pop();

    lines.forEach(function(line) {
        this.push(line);
    }, this);

    done();
};

LineSplitter.prototype._flush = function(done) {
    this.push(this._buf);

    done();
};

function LineProcessor() {
    stream.Writable.call(this, { objectMode: true });
}

util.inherits(LineProcessor, stream.Writable);

LineProcessor.prototype._write = function(data, enc, done) {
    console.log('line: ' + data);
    done();
};

var data1 = fs.createReadStream('./data2.txt', 'utf8');
var lineSplitter = new LineSplitter();
data1
    .pipe(lineSplitter)
    .pipe(new LineProcessor())
;
