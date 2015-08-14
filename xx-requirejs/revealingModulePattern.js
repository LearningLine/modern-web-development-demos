var MESH = (function() {
    var foo = 'bar';

    return {
        baz: function() {
            console.log(foo);
        }
    };
})();

MESH.baz();
