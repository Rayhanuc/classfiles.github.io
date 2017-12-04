(function($){
	"use stict";


	jQuery(document).ready(function($) {
		
		//Slilcknav Mobiel Menu
		$("#main-nav").slicknav({
			prependTo: '.mobile-menu-wrap'
		});

		//Homepage slide owl carousel
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

		
		// wondow layout changer start
		$(".boxed-layout").on("click", function(){
			$("body").addClass("boxed-layout").removeClass("dafault-layout");
			$(".layout-changer span").removeClass("active");
			$(this).addClass("active");			
		});

		$(".dafault-layout").on("click", function(){
			$("body").addClass("dafault-layout").removeClass("boxed-layout");
			$(".layout-changer span").removeClass("active");
			$(this).addClass("active");
		});
		// wondow layout changer end



		//Search bar
		$(".search-icon").on("click", function(){
			$(".search-bar-wrap").addClass("active");			
		});


		/* Home page slides hero area animation setting */
		$(".search-close").on("click", function(){
			$(".search-bar-wrap").removeClass("active");
			
		});

			
		/* Home page slides hero area animation setting */
		$(".homepage-slides").on("translate.owl.carousel", function(){
			$(".single-slide-item h2").removeClass("animated flipInX").css("opacity", "0");
			$(".single-slide-item span").removeClass("animated fadeInRight").css("opacity", "0");
			$(".single-slide-item .video-bg").removeClass("animated slideInUp").css("opacity", "0");
		});

		/* Home page slides hero area animation setting */
		$(".homepage-slides").on("translated.owl.carousel", function(){
			$(".single-slide-item h2").addClass("animated flipInX").css("opacity", "1");
			$(".single-slide-item span").addClass("animated fadeInRight").css("opacity", "1");
			$(".single-slide-item .video-bg").addClass("animated slideInUp").css("opacity", "1");
		});

		//Team list owl carousel
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
		
		//Testimonial list owl carousel
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


		//Home page Logo owl carousel
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

		//Home page circleprogress bar
		$("#web-design-skillbar").circleProgress({
			value: 0.9,
			size: 270,
			thickness: 2,
			fill: '#22babf',
		}).on('circle-animation-progress', function(event, progress) {
		    $(this).find('.skil-count-no').html(Math.round(90 * progress) + '<i>%</i>');
		});

		//Home page circleprogress bar
		$("#graphic-design-skillbar").circleProgress({
			value: 0.95,
			size: 270,
			thickness: 2,
			fill: '#22babf',
		}).on('circle-animation-progress', function(event, progress) {
		    $(this).find('.skil-count-no').html(Math.round(95 * progress) + '<i>%</i>');
		});

		//Home page circleprogress bar
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

		var filterValue = $ (this).attr("data-filter");
		$(".portfolio-list").isotope({
			filter: filterValue,
			masonry: {
				columnwidth: '.col-md-4',
				horizontalOrder: false,
			}
		});


		$(".portfolio-list").isotope ({
			layoutMode: 'masonry',
			masonry: {
				columnwidth: '.col-md-4',
				horizontalOrder: false,
			}
		});














		//Home page Modal Video
		$(".js-modal-btn").modalVideo();



	});



	jQuery(window).load(function(){
		
	});

	});
}(jQuery));