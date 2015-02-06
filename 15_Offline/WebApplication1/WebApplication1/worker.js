// no DOM
// no window, document
// no alert, prompt, confirm
// no global variables from the page
// XMLHttpRequest
// setTimeout, setInterval
// JavaScript intrinsic

//importScripts('foo.js');

onmessage = function (e) {
    if (e.data === 'hello') {
        postMessage('sup!');
    }
};
