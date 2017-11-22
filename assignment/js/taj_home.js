function initMap() {
	var uluru = {lat: 53.3452579, lng: -6.2640856};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}	
$(document).ready(function(){	
	$(this).scrollTop(0);
	$('.carousel').carousel({
	  interval: 1000 * 2
	});	
	$(window).scroll(function() {
	  $(".slideanim").each(function(){
		var pos = $(this).offset().top;
		var winTop = $(window).scrollTop();
		if (pos < winTop + 600) {
		  $(this).addClass("slide");
		}
	  });
	}); 
});