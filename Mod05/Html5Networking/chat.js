var hub = $.connection.chatHub;

hub.client.broadcast = function (msg) {
    $('<li>').text(msg).prependTo('#msgs');
}

$.connection.hub.start().then(function() {
    console.log('connection opened');

    $('#send').click(function() {
        var msg = $('#msg').val();

        hub.server.sendMessage(msg);

    });

});