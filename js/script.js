
// $(document).ready(function() {
// 	// Hiding and showing navigation-arrow
// // 	$(window).scroll(function() {
// // 		if ($(window).scrollTop() > 600) {
// // 			$('.navigation-arrow').css('opacity', '0');

// // 		} else {
// // 			$('.navigation-arrow').fadeOut();
// // 		}
// // 	});
// })


$(document).scroll(function() {    
var scroll = $(this).scrollTop();
if (scroll >= 500) {
$(".icon").addClass("arrow-opacity");
}
});