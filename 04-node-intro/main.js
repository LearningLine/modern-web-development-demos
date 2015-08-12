var fs = require('fs');

var _ = require('lodash');
var request = require('request');

var myModule = require('./myModule');

myModule.hello();

request('http://www.intel.com').pipe(
    fs.createWriteStream('intel.html')
);
