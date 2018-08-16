(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        $(".client-testimonial-carousel").owlCarousel({
        	items: 3,
            margin: 30,
            loop: true,
            autoplay: false,
            nav: false,
            dots: true,


        });
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	