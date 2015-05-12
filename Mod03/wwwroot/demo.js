/**
 * Created by Maurice on 5/11/2015.
 */


    $(function () {
        'use strict';


        //$('li').text('Selected')
        //$('.demo').text('Selected')
        //$('#one').text('Selected')

        //$('#nested .demo').text('Selected')
        //$('#outer > .demo').text('Selected')
        //$('#outer > li:nth-child(even)').text('Selected')


        //var even = $('#outer > li:nth-child(even)');
        //for (var i =0;i< even.length;i++){
        //    //even[i].text("Selected element " + i);
        //    //even[i].innerText = "Selected element " + i;
        //    $(even[i]).text("Selected element " + i);
        //
        //    // Don't do this!
        //    //var id = $(even[i]).attr('id')
        //}

        console.log($('li:first').text())
        var input = $('#input');
        console.log(input.val())
        input.val('THis was changed');


        var ul = $('ul')
        console.log($('li:first', ul).text())

        $('#btn').click(function () {
            //$('li').toggle()
            //$('li').slideToggle(5000)
            $('ul#outer').slideToggle(5000)
            //$('li').fadeToggle(5000)
        })

        $('#btn').mouseover(function () {
            //$(this).css('position', 'absolute')
            //$(this).css('top', 5)

            //$(this).css('position', 'absolute').css('top', 5)
            $(this).css({
                position: 'absolute',
                top: 5,
                //'background-color': 'red'
                backgroundColor: 'red'
            });
        })


        $('body, ul, li, h2').click(function (e) {
            console.log('Clicked')
            e.originalEvent.cancelBubble = true;
            //return false;
        })

        $('#placeholder').load('nested.html p')


        $.getJSON('/api/movies').then(function(data){
            console.log(data)

            data.forEach(function(movie){
                $('<li>').text(movie.title).appendTo('#outer')

            })
        })
    })










