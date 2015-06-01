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
    $('li:nth-child(even)').css('color', 'red');

    $('ul li .cool')








});