document.addEventListener("DOMContentLoaded", function() {
	sliderDataLength();
	function sliderDataLength(){
		let nbr = document.getElementById('slider-length'),
			nbrLength1 = document.querySelectorAll('#models-slider .img-wrap').length,
			nbrLength2 = document.querySelectorAll('#models-slider-citikoko .img-wrap').length;
			$('#models-slider').attr('data-number',nbrLength1);
			$('#models-slider-citikoko').attr('data-number',nbrLength2);
			nbr.innerHTML = '0' + $('#models-slider').attr('data-number');
	};
	$('#header-slider').slick({
		dots: true,
		infinite: true,
		arrows: false,
		speed: 300,
		slidesToShow: 1
	  });
	$('#models-slider').slick({
		dots: false,
		infinite: false,
		arrows: false,
		speed: 300,
		slidesToShow: 1
	});
	$('#models-slider-citikoko').slick({
		dots: false,
		infinite: false,
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
		setTimeout(() => {

			let indexScooter = $('#models-slider .img-wrap.slick-current').attr('data-slick-index'),
				indexCitikoko = $('#models-slider-citikoko .img-wrap.slick-current').attr('data-slick-index'),
				currentNbrScooter = document.getElementById('slider-current--scooter'),
				currentNbrCitikoko = document.getElementById('slider-current--citikoko');
			indexScooter++;
			indexCitikoko++;
			console.log(indexScooter + ',' + indexCitikoko);
			
			currentNbrScooter.innerHTML = '0' + indexScooter;
			currentNbrCitikoko.innerHTML = '0' + indexCitikoko;
		}, 100);
		
		$('#models-slider').slick('slickPrev');
		$('#models-slider-citikoko').slick('slickPrev');
	  });
	$('.right').click(function(){
		setTimeout(() => {

			let indexScooter = $('#models-slider .img-wrap.slick-current').attr('data-slick-index'),
				indexCitikoko = $('#models-slider-citikoko .img-wrap.slick-current').attr('data-slick-index'),
				currentNbrScooter = document.getElementById('slider-current--scooter'),
				currentNbrCitikoko = document.getElementById('slider-current--citikoko');
			indexScooter++;
			indexCitikoko++;
			console.log(indexScooter + ',' + indexCitikoko);
			
			currentNbrScooter.innerHTML = '0' + indexScooter;
			currentNbrCitikoko.innerHTML = '0' + indexCitikoko;
		}, 100);
		$('#models-slider').slick('slickNext');
		$('#models-slider-citikoko').slick('slickNext');
	});
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
			let nbr = document.getElementById('slider-length');
			nbr.innerHTML = '0' + $('#models-slider').attr('data-number');
			$("#citikoko").removeClass("btn--inverse");
			$(this).addClass("btn--inverse");
			$(".scooters").removeClass("invisible");
			$(".citikokos").addClass("invisible");
			$("#slider-current--scooter").removeClass("invisible");
			$("#slider-current--citikoko").addClass("invisible");
		});
		$("#citikoko").click(function(e){
			let nbr = document.getElementById('slider-length');
			nbr.innerHTML = '0' + $('#models-slider-citikoko').attr('data-number');
			$("#scooter").removeClass("btn--inverse");
			$(this).addClass("btn--inverse");
			$(".scooters").addClass("invisible");
			$(".citikokos").removeClass("invisible");
			$("#slider-current--scooter").addClass("invisible");
			$("#slider-current--citikoko").removeClass("invisible");
		})
	};

	//Popup form
	$('.img-wrap').click(function(){
		$('.popup-wrap').fadeIn();
	});
	$('.popup-close').click(function(){
		$('.popup-wrap').fadeOut();
	});

	//Contact form
	$('.header-slider__link, #header-phone-btn').click(function(e){
		e.preventDefault();
		$('.contact-wrap').fadeIn();
	});
	$('.contact__close').click(function(){
		$('.contact-wrap').fadeOut();
	});

	//Popup card
	$('.loan__list li a').click(function(e){
		e.preventDefault();
		$(this).siblings('.loan__popup-wrap').fadeIn();
	});
	$('.loan__close').click(function(){
		$(this).parents('.loan__popup-wrap').fadeOut();
	});
});
