alert('Are we offline?');

// hello

window.applicationCache.addEventListener('updateready', function () {
    console.log('update ready');
    // ask first!
    // window.location.reload();
});
