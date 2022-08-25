$(document).ready(function(){
	$('.button').click(function(){
		
		if($(this).attr('val') == 'off'){
			var get_filter = $(this).attr("filter");
			$('.button[filter]').attr("val","off");
			$('.button[filter]').removeClass('focused');
			$(this).attr('val',"on");
			$(this).addClass('focused');

			$('.filter > div').hide(500);
			$('.filter > div[filter=' + get_filter + ']').show(500);

			$('#showall').click(function(){
				$('.img_portf').show(500);
			});
		};
	});
	$('.multiple-items').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		focusOnSelect: false,
		arrows: true,
		dots: true,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

	/*menu*/
	$('ul.menu a[href^="#"').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1000);
		// $('ul.menu a[href^="#"').css({'color' : '#212121'});
		// $(this).css({'color' : '#004bee'})
		return false;
	})

	$(window).scroll(function(){
		if ($(this).scrollTop() !=0)
			$('#totop').fadeIn();
		else
			$('#totop').fadeOut();
	})
	$('#totop').click(function(){
		$('body, html').animate({
			scrollTop: 0
		}, 800);
	})


	$('.menu_icon').click(function(){
		$('nav').slideToggle(500);
		$('ul.menu').css({'display':'flex', 'flex-direction':'column'})

		if($('.menu_icon').html()=='<i class="fas fa-bars"></i>') {
			$(this).html('<i class="fas fa-times"></i>')
		} else {
			$(this).html('<i class="fas fa-bars"></i>')
		}
	})
	
});
