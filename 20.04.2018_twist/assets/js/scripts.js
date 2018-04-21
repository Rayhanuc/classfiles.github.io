jQuery(document).ready(function($){
	$(".homepage-slides").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: false,
		navText: ["<i class='fa fa-long-arrow-left'</i>", "<i class='fa fa-long-arrow-right'</i>"],
		autoplay: false
	});

	$(".team-list, .testimonial-list").owlCarousel({
		items: 3,
		margin: 30,
		loop: true,
		nav: false,
		dots: true,
		autoplay: false
	});

	$(".testimonial-list").owlCarousel({
		items: 3,
		margin: 30,
		loop: true,
		nav: false,
		dots: true,
		autoplay: false
	});


	$(".logo-carousel").owlCarousel({
		items: 5,
		margin: 30,
		loop: true,
		nav: false,
		dots: false,
		autoplay: false
	});

	$("#web-design-skill-bar").circleProgress({
		value: 0.9,
		size: 270,
		thickness: 2,
		fill:'#22bbc0',
	})	.on('circle-animation-progress', function(event, progress) {
    	$(this).find('.skill-count-no').html(Math.round(90 * progress) + '<i>%</i>');
  	});

	$("#graphic-design-skill-bar").circleProgress({
		value: 0.95,
		size: 270,
		thickness: 2,
		fill:'#22bbc0',
	})	.on('circle-animation-progress', function(event, progress) {
    	$(this).find('.skill-count-no').html(Math.round(95 * progress) + '<i>%</i>');
  	});

	$("#digital-marketing-skill-bar").circleProgress({
		value: 0.84,
		size: 270,
		thickness: 2,
		fill:'#22bbc0',
	})	.on('circle-animation-progress', function(event, progress) {
   	 	$(this).find('.skill-count-no').html(Math.round(84 * progress) + '<i>%</i>');
  	});
});