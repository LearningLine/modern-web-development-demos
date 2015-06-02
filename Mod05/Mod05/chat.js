$(function() {

    var hub = $.connection.chatHub;

    hub.client.broadcast = function(text) {
        $('<li>').text(text).prependTo('#msgs');
    }

    $.connection.hub.start(function() {

        $('#btnSend').click(function() {
            hub.server.sendMessage($('#msg').val());


        });


    });
})