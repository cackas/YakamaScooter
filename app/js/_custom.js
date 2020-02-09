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
	$('.left').click(function(){
		$('#models-slider').slick('slickPrev');
	  })
	$('.right').click(function(){
		$('#models-slider').slick('slickNext');
	})
});
