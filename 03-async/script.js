(function() {
    'use script';

    // console.log(1);
    //
    // setTimeout(function() {
    //     console.log(2);
    // }, 1000);
    //
    // var state = 0;
    //
    // var id = setInterval(function() {
    //     console.log(++state);
    //
    //     if (state >= 4) {
    //         clearInterval(id);
    //     }
    // }, 1000);
    //
    // console.log(3);

    // navigator.geolocation.getCurrentPosition(function(pos) {
    //     console.log(pos);
    // }, function(err) {
    //     console.log(err);
    // });

    // doAsyncWork(function(err, result) {
    //     if (err) {
    //         // handle error
    //     } else {
    //         // use result
    //     }
    // });

    // var xhr = new XMLHttpRequest();
    //
    // xhr.open('GET', '/data.json');
    //
    // // xhr.onload = function(res) {
    // //     console.log(res);
    // // };
    //
    // xhr.addEventListener('load', function(res) {
    //     console.log(res);
    // });
    //
    // xhr.send();

    // try {
    //     var res = doAjax();
    //     var json = res.json();
    //     updateUI(json);
    // } catch (err) {
    //     showError(err);
    // }

    fetch('/data.json') // 1
        .then(function(res) { // 2
            return res.json(); // 5
        })
        .then(function(data) { // 3
            return updateUI();
        })
        .then(function(res) {
            console.log(res);
            console.log('UI is updated!');
        })
        .catch(function(err) { // 4
            showError(err);
            // throw err;
        })
        .then(function() {
            console.log('done for real now');
        })
        .catch(function(err) {
            console.log('another error?');
        })
    ;

    function updateUI(data) {
        return new Promise(function(resolve, reject) {
            if (!data) {
                reject(new Error('where\'s the data?'));
            } else {
                setTimeout(function() {
                    console.log(data);
                    resolve('done!');
                }, 2000);
            }
        });
    }

    function showError(err) {
        console.log(err);
    }








})();
