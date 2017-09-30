(function($) {
	"use strict"

	jQuery(document).ready(function($) {
	   var uluru = {lat: 22.3457219, lng: 91.8119595};
    $('.map')
      .gmap3({
        zoom: 14,
        center: uluru
      })
      .marker({
        position: uluru
      })
      .infowindow({
        content: "Hello from Chittagong"
      })
      .then(function (infowindow) {
        var map = this.get(0);
        var marker = this.get(1);
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      });
      
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