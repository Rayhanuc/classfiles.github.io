(function($) {
	"use strict"

	jQuery(document).ready(function($) {
	  var center = [22.3455632, 91.8140194];
    $('.map')
      .gmap3({
        center: center,
        zoom: 13,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      })
        .infowindow({
        content: "Hello from Uluru"
      })
      .circle({
        center: center,
        radius : 750,
        fillColor : "#FFAF9F",
        strokeColor : "#FF512F"
      })
        .marker({
        position: uluru
      })
      
	});

	jQuery(window).load(function() { 

	});


}(jQuery));





					function myMap() {
						var mapProp= {
						    center:new google.maps.LatLng(23.4521847,85.8461677),
						    zoom:5,
						};
						var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
						}