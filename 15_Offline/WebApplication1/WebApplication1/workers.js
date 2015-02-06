var worker = new Worker('worker.js');
worker.postMessage('hello');
worker.onmessage = function (e) {
    alert(e.data);
};

// navigator.serviceWorker.register('foo.js');
// onfetch = function() {}
