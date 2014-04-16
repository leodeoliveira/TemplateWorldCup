$(document).ready(function(){
	
	$("#grupoB").hide();
	
	$("nav ul li a").on('click', function(){
		
		// var valorHref = $(this).attr('href');

		var divId = $('li.active').children().attr('href');
		$(divId).css('display', 'none');
		
		console.log(divId);

		$(this).parent().siblings('li').removeClass('active');
		$(this).parent().addClass('active');
		var divId = $('li.active').children().attr('href');

		$(divId).css('display', 'block');
		
		console.log(divId);	
		// if($(this).parent().prop('class', 'active')){
		// 	$(this).prop('class', '');
		// 	$(valorHref).show();	
		// }
		
		
	});

});
