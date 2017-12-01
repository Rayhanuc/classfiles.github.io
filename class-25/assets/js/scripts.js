(function($){
	"use stict";


jQuery(document).ready(function($) {
	
	$("#main-nav").slicknav({
		prependTo: '.mobile-menu-wrap'
	});

	$(".homepage-slides").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: false,
		navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
		navSpeed:1200,
		autoplay: true,
		autoplaySpeed:1200,
		mouseDrag: false,
		touchDrag: false,
	});

		
	/* animation setting */

	$(".homepage-slides").on("translate.owl.carousel", function(){
		$(".single-slide-item h2").removeClass("animated flipInX").css("opacity", "0");
		$(".single-slide-item span").removeClass("animated fadeInRight").css("opacity", "0");
		$(".single-slide-item .video-bg").removeClass("animated slideInUp").css("opacity", "0");
	});

	$(".homepage-slides").on("translated.owl.carousel", function(){
		$(".single-slide-item h2").addClass("animated flipInX").css("opacity", "1");
		$(".single-slide-item span").addClass("animated fadeInRight").css("opacity", "1");
		$(".single-slide-item .video-bg").addClass("animated slideInUp").css("opacity", "1");
	});


	$(".team-list").owlCarousel({
		margin: 30,
		loop: true,
		nav: false,
		navSpeed:1200,
		dots: true,
		autoplay: true,
		autoplaySpeed:1200,
		responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});
	
	$(".testimonial-list").owlCarousel({
		items: 3,
		margin: 30,
		loop: true,
		nav: false,
		navSpeed:1200,
		dots: true,
		autoplay: true,
		autoplaySpeed:1200,
		responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});

	$(".logo-carousel").owlCarousel({
		margin: 30,
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		responsive:{
	        0:{
	            items:2
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});

	$("#web-design-skillbar").circleProgress({
		value: 0.9,
		size: 270,
		thickness: 2,
		fill: '#22babf',
	}).on('circle-animation-progress', function(event, progress) {
	    $(this).find('.skil-count-no').html(Math.round(90 * progress) + '<i>%</i>');
	});

	$("#graphic-design-skillbar").circleProgress({
		value: 0.95,
		size: 270,
		thickness: 2,
		fill: '#22babf',
	}).on('circle-animation-progress', function(event, progress) {
	    $(this).find('.skil-count-no').html(Math.round(95 * progress) + '<i>%</i>');
	});

	$("#digital-marketing-skillbar").circleProgress({
		value: 0.84,
		size: 270,
		thickness: 2,
		fill: '#22babf',
	}).on('circle-animation-progress', function(event, progress) {
	    $(this).find('.skil-count-no').html(Math.round(84 * progress) + '<i>%</i>');
	});


	$(".portfolio-filter li").on('click', function() {
		$(".portfolio-filter li").removeClass("active");
		$(this).addClass("active");

		var filterValue = $(this).attr("data-filter");

		$(".portfolio-list").isotope({
			filter: filterValue,
			layoutMode: 'masonry',
			masonry: {
				columnWidth: '.col-md-3',
				horizontalOrder: false
			}
		});
	});

	$(".js-modal-btn").modalVideo();


});



	jQuery(window).load(function(){
		
		//Activating Isotop
		

	});
}(jQuery));