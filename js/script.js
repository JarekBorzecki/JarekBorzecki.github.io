
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

$(document).ready(function() {
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




    // grab the initial top offset of the navigation 
    var stickyNavTop = $('.nav').offset().top;

    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function(){
    var scrollTop = $(window).scrollTop(); // our current vertical position from the top

    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
    // otherwise change it back to relative
    if (scrollTop > stickyNavTop) {
    $('.navbar-collapse').addClass('sticky').css({left: '775px'});
    $('.navbar-header').addClass('sticky').css({right: '28px'});
    } else {
    $('.navbar-collapse').removeClass('sticky');
    $('.navbar-header').removeClass('sticky');
    }
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
    stickyNav();
    });
});

