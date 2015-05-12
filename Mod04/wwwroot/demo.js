/**
 * Created by Maurice on 5/12/2015.
 */


$(function () {
    'use strict';


    //$('#large').click(function(){
    //    //$(this).hide('shake');
    //    //$(this).animate({backgroundColor:  'red'});
    //    //$(this).switchClass('large', 'small', 1000, 'easeInOutBounce');
    //    $(this).switchClass('large', 'small', 1000, 'easeInOutCubic');
    //
    //})

    //
    //$('#small').draggable({
    //    stop: function(){
    //        console.log("Stopping the drag action")
    //    }
    //
    //});
    //
    //
    //$('#large').droppable({
    //
    //    drop: function(e, ui){
    //        console.log('Something was dropped', e, ui)
    //    }
    //});


    //$('#large').resizable();
    //
    //
    //
    $.fn.makeRed = function(){
        this.css('backgroundColor', 'red');

        return this;
    };


    $('#large').makeRed().text('Some text');
});










