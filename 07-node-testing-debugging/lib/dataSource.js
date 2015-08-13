var request = require('request');
var Promise = require('bluebird');

var requestAsync = Promise.promisify(request);

function DataSource() {
}

DataSource.prototype._getData = function() {
    return requestAsync('https://nodejs.org');
};

DataSource.prototype._processData = function(data) {
    return data.toUpperCase();
};

DataSource.prototype._updateData = function(data) {
    console.log('updating data!');
    //return requestAsync('https://nodejs.org', { method: 'POST', body: data });
};

DataSource.prototype.doWork = function() {
    return this._getData()
        .get(1)
        .then(this._processData)
        .then(this._updateData)
    ;
};

module.exports = DataSource;
