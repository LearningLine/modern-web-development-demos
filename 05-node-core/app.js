var fs = require('fs');

console.log('starting');

var data1, data2;

fs.readFile('./data1.txt', 'utf8', function(err, text) {
    if (err) {
        console.error(err);
    } else {
        // console.log(buffer.toString('utf8'));
        console.log(text);
        data1 = text;

        useData();
    }
});

fs.readFile('./data2.txt', 'utf8', function(err, text) {
    if (err) {
        console.error(err);
    } else {
        console.log(text);
        data2 = text;

        useData();
    }
});

function useData() {
    if (data1 && data2) {
        console.log('done!');
    }
}






console.log('ending?');
