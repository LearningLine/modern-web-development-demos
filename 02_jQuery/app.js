/// <reference path="typings/jquery/jquery.d.ts"/>

//$(document).on('ready', function () {
//$(document).ready(function () {

$(function () {
	//console.log('hello!');

	// var list = $('#brock');
	// for(var i = 0; i < list.length; i++){
	// 	console.log(list[i].innerHTML);
	// }

	//$('li').text("new text!");
	//$('li').css("color", "blue");
	//$('li').addClass("foo");


	//$('#people > li.female').css("color", "blue");
	//$('#people > li:not(.female)').css("color", "blue");
	//$('#people > li:odd').css("background-color", "lime");

	// fluent API
	// $('li')
	// 	.text("new text!")
	// 	.css("color", "blue")
	// 	.addClass("foo");

	$("ul")
		.on('click', "li", function () {
		//console.log(this.innerHTML + " was clicked!");
		$(this).toggleClass('highlight');
	});

	$('#hire').click(function () {
		$('<li>').text($("#name").val()).appendTo('#people');
		// var name = $('#name');
		// var li = $('<li>');
		// li.attr("data-pk", "348734873489");
		// li.text(name.val());
		// name.val('').focus();
		// $('#people').append(li);
	});

	$('#fire').click(function () {
		var to_fire = $('.highlight');
		var ids = [];
		to_fire.each(function () {
			var pk = this.dataset['pk'];
			ids.push(pk);
		});

		console.log(ids);
	
		//to_fire.remove();
		to_fire
			.fadeOut("slow")
			.slideDown("fast")
			.slideUp(2000, function () {
			$(this).remove();
		});
	});
});
