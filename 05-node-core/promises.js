#!/usr/bin/env node

var fs = require('fs');

var Promise = require('bluebird');

// var readFileAsync = Promise.promisify(fs.readFile);

Promise.promisifyAll(fs);

Promise
    .all(
        fs.readFileAsync('./data1.txt', 'utf8'),
        fs.readFileAsync('./data2.txt', 'utf8')
    )
    .then(processFiles)
    .catch(handleError)
;

function processFiles(files) {
    console.log(files[0]);
    console.log(files[1]);
}

function handleError(err) {
    console.error(err);
}
