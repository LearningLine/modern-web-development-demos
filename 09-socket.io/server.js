var socketIO = require('socket.io');

var io = socketIO();

io.on('connect', function(socket) {
    console.log(socket.id + ' connected!');

    socket.on('fromClientMessage', function(msg) {
        console.log(msg);

        io.emit('fromServerMessage', msg);
    });
});

var port = process.env.PORT || 8080;

io.listen(port, function() {
    console.log('ready!');
});
