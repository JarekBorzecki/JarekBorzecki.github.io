
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

$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});