//importScripts("app2.js");
var count = 0;
var h = setInterval(function () {
    console.log("i'm alive!");
    count++;
    if (count > 5) {
        clearInterval(h);
    }
}, 1000);

this.onmessage = function (e) {
    if (e.data == "start") {
        var pi = 0;
        for (var i = 0; i < 9999999999; i++) {
            pi += i;
        }

        this.postMessage({ status: 'done', result: pi });
    }
}
