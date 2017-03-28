var main = function(){
	var NavY = $('nav').offset().top;
	var stickyNav = function(){
		var ScrollY = $(window).scrollTop();
		if (ScrollY >= NavY) { 
			$('nav').addClass('sticky');
		} else
		{
			$('nav').removeClass('sticky'); 
		}
	};
	$(window).scroll(function() {
		stickyNav();
	});
	
	$('.menu').click(function() {
		if($(this).siblings(".books").css('display')=='none')
		{
			$('.books').hide();
			$(this).siblings(".books").toggle();
		}else 
		{
			$('.books').hide();
		}
	});
	
	$('#content').click(function() {
		$(".books").hide();
	});
	
	$('.button').click(function() {
		$('.recenzje').toggle();
		$('.opisy').toggle();
		$('.button').toggleClass('black');
	});
	
	$('.buttonComment').click(function() {
		var post = $('.comment').val();
		$('<li>').text(post).prependTo('.comments');
		$('.comment').val('');
		$('.counter').text('140');
		$('.buttonComment').addClass('disabled'); 
	});

	$('.comment').keyup(function() {
		var postLength = $(this).val().length;
		var charactersLeft = 140 - postLength;
		$('.counter').text(charactersLeft);
		if(charactersLeft <= 0){
			$('.buttonComment').addClass('disabled'); 
		}
		else if(charactersLeft == 140) {
			$('.buttonComment').addClass('disabled');
		}
		else {
			$('.buttonComment').removeClass('disabled');
		}
	});

	$('.buttonComment').addClass('disabled');
	
}

$(document).ready(main);