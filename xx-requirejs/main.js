requirejs.config({
    paths: {
        jquery: 'node_modules/jquery/dist/jquery'
    },
    shim: {
        mesh: {
            exports: 'MESH'
        }
    }
});

define([ 'logger', 'jquery', 'mesh' ], function(logger, $, MESH) {
    logger.log('Hello, RequireJS!');

    MESH.discoverPeers();
});
