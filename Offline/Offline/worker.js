(function() {
    onmessage = function (e) {
        if (e.data == "start") {
            var count = 0;
            for (var i = 0; i < 911111111; i++) {
                count++;
            }

            //alert(count);
            console.log('done working');
            postMessage({ count: count });
        }
    }
})