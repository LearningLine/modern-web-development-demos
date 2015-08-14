define([], function() {
    var local = 'notGlobal!';

    return {
        log: function(msg) {
            alert(msg);
        },
        error: function(msg) {
            console.log(local);
        },
        warn: function(msg) {

        }
    };
});
