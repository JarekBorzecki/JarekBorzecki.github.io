
$(document).ready(function() {
	// Hiding and showing navigation-arrow
	$(window).scroll(function() {
		if ($(window).scrollTop() > 600) {
			$('#navigation-arrow').fadeIn();

		} else {
			$('#navigation-arrow').fadeOut();
		}
	});
})