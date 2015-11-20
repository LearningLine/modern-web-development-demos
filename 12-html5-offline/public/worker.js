// in the main page:
// worker.postMessage({
//     functionName: 'foo',
//     otherData: 'bar'
// });

var myFunctions = {
    foo: function() {
        postMessage('done');
    },
    bar: function() {
        postMessage('done');
    }
};

onmessage = function(e) {
    myFunctions[e.data.functionName](e.data);
};
