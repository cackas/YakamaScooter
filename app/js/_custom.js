document.addEventListener("DOMContentLoaded", function() {

	$('#header-slider').slick({
		dots: true,
		infinite: true,
		arrows: false,
		speed: 300,
		slidesToShow: 1
	  });
	$('#models-slider').slick({
		dots: false,
		infinite: true,
		arrows: false,
		speed: 300,
		slidesToShow: 1
	});
	$('#models-slider-citikoko').slick({
		dots: false,
		infinite: true,
		arrows: false,
		speed: 300,
		slidesToShow: 1
	});
	$('.popup-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.popup-slider-nav',
		autoplay: true
	  });
	$('.popup-slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.popup-slider',
		centerMode: true,
		centerPadding: 0,
		focusOnSelect: true
	  });
	$('.left').click(function(){
		$('#models-slider').slick('slickPrev');
		$('#models-slider-citikoko').slick('slickPrev');
	  })
	$('.right').click(function(){
		$('#models-slider').slick('slickNext');
		$('#models-slider-citikoko').slick('slickNext');
	})
	$('.popup-left').click(function(){
		$('.popup-slider').slick('slickPrev');
		$('.popup-slider-nav').slick('slickPrev');
	  })
	$('.popup-right').click(function(){
		$('.popup-slider').slick('slickNext');
		$('.popup-slider-nav').slick('slickNext');
	});

	tabs();

	function tabs(){
		$("#scooter").click(function(e){
			$("#citikoko").removeClass("btn--inverse");
			$(this).addClass("btn--inverse");
			$(".scooters").removeClass("invisible");
			$(".citikokos").addClass("invisible");
		});
		$("#citikoko").click(function(e){
			$("#scooter").removeClass("btn--inverse");
			$(this).addClass("btn--inverse");
			$(".scooters").addClass("invisible");
			$(".citikokos").removeClass("invisible");
		})
	};

	
	$('.img-wrap').click(function(){
		$('.popup-wrap').fadeIn();
	});
	$('.popup-close').click(function(){
		$('.popup-wrap').fadeOut();
	});
});
