(function ($) {
	"use stict";

	jQuery(document).ready(function($){
		
		var uluru = {lat: -25.363, lng: 131.044};
		    $('.map')
		      .gmap3({
		        zoom: 4,
		        center: uluru
		      })
		      .infowindow({
		        position: uluru,
		        content: "Hello from Uluru"
		      })
		      .then(function (infowindow) {
		        infowindow.open(this.get(0)); // this.get(0) return the map (see "get" feature)
		      });
	})
});