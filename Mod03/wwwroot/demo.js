/**
 * Created by Maurice on 6/1/2015.
 */


$(function(){
    console.log('The document is loaded and ready');


    //$('li').css('color', 'red');
    //$('li.myStyle').css('color', 'red');
    //$('ul .myStyle').css('color', 'red');
    //$('#8').css('color', 'red');
    //$('#notThere').css('color', 'red');

    console.log($('ul .myStyle').length)
    console.log($('#8').length)
    console.log($('#notThere').length)

    //$('li:first').css('color', 'red');
    //$('li:even').css('color', 'red');
    //$('li:nth-child(even)').css('color', 'red');

    //$('ul li .cool')
    //
    //
    //
    //var firstSelector = $('ul');
    //$('.myStyle',  firstSelector).css('color', 'red');



    //$('#btn').click(function(){
    $('#btn').bind('click', function(){
        //$('li').toggle();
        //$('li').slideToggle(10000);
        //$('ul').slideToggle(10000);
        //$('ul').fadeToggle(5000);
        //var opacity = 1;
        //setInterval(function(){
        //    opacity -= 0.1;
        //    $('ul').css('opacity', opacity)
        //}, 100)
        //$('ul').animate({
        //    opacity: 0.25,
        //    left: "+=50"
        //    //height: "toggle"
        //}, 5000)


        //$('li').text('Some other text').css('color','red').attr('foo', 12)

    //$('<li>').text('new element').appendTo('ul')
    //$('<li>Some text</li>').appendTo('ul')
       $('li:eq(5)').before( $('<li id="2">Some text</li>'));
    });



    $('#btnLoad').click(function(){

        $('#loaded').load('/subPage.html div.content')
    })

    $('#loadJSON').click(function(){

        $.getJSON('/api/movies').then(function(movies){
            console.table(movies)

            movies.forEach(function(movie){
                $('<li>')
                    .attr('id', movie.id)
                    .text(movie.title)
                    .appendTo('#movies')

            });
        });

    })
});