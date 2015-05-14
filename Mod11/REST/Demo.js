var json = '{"id":1,"title":"The Ultimate Hitchhikers Guide to the Galaxy","author":"Douglas Adams","imageName":"TheUltimateHitchhikersGuide.jpg"}'
var obj = JSON.parse(json)
console.log(obj);


$(function() {

    $('#load').click(function() {
        $.getJSON('/api/books/1').then(function(book) {
            $('#book').text(book.title);

        });
    });

})