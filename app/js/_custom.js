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
	$('.scooters .img-wrap').click(function(){
		$('.popups-scooters .popup-wrap').eq($(this).index()).fadeIn();
	});
	$('.citikokos .img-wrap').click(function(){
		$('.popups-citikoko .popup-wrap').eq($(this).index()).fadeIn();
	});
	$('.popup-close').click(function(){
		$('.popup-wrap').fadeOut();
	});

	//Contact form
	$('#header-slider__link, #models__link, #bag__link, #map__link, #loan__link, #header-phone-btn, #header-scooter-btn, .popup-btn').click(function(e){
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

	//Popuplist
	$('.popup-list .tab-btn').click(function(){
		$('.popup-list .tab-btn').removeClass('btn--inverse');
		$(this).addClass('btn--inverse');
	})
	$('#popup-list-all').click(function(){
		$('#list-all').removeClass('hidden');
		$('#list-scooters').addClass('hidden');
		$('#list-citikokos').addClass('hidden');
	})
	$('#popup-list-scooters').click(function(){
		$('#list-all').addClass('hidden');
		$('#list-scooters').removeClass('hidden');
		$('#list-citikokos').addClass('hidden');
	})
	$('#popup-list-citikokos').click(function(){
		$('#list-all').addClass('hidden');
		$('#list-scooters').addClass('hidden');
		$('#list-citikokos').removeClass('hidden');
	})
	$('.popup-list__arrow').click(function(){
		$('.popup-list-wrap').fadeIn();
	})
	$('.popup-list-wrap .popup-close').click(function(){
		$('.popup-list-wrap').fadeOut();
	})
//Кнопка адаптивного меню
    var toggles = document.querySelectorAll(".cmn-toggle-switch");

    for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
	}
	$('.cmn-toggle-switch').on('click', function() {
		$('.menu-wrap').fadeToggle();
	  });
});
