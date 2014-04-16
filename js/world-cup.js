$(document).ready(function(){
	
	$("#grupoB").hide();
	
	$("nav ul li a").on('click', function(){
		
		var divId = $('li.active').children().attr('href');
		
		$(divId).css('display', 'none');
		
		$(this).parent().siblings('li').removeClass('active');
		$(this).parent().addClass('active');
		
		divId = $('li.active').children().attr('href');

		$(divId).css('display', 'block');
		
		
	});

});
