/* Zooming in feature while hovering over project squares */

                        $(document).ready(function(){
                            
                        const elements = document.querySelectorAll('.card-image');

                         for (let i = 0; i < elements.length; i++) {
                            elements[i].addEventListener("mousemove", (e) => {
                       
                            /* Zooming in feature will only work for screen width of 992 px */
                            if (window.innerWidth > 992) {

                            elements[i].style.backgroundPositionX = -e.offsetX + "px";
                            elements[i].style.backgroundPositionY = -e.offsetY + "px";
                                
                            elements[i].addEventListener("mouseleave", (e) => {
                            elements[i].style.backgroundPosition = "center";
                    });
                                                         }
                                
                            });
                         
                         }
                             
 
                        })



/* Preload image is used to prevent images from blinking after the page is opened for the 1st time*/
function preload_image(im_url) {
  let img = new Image();
  img.src = im_url;
}

preload_image("images/projects_displays/ux_colored.png");
preload_image("images/projects_displays/gd_colored.png");
preload_image("images/projects_displays/games_colored.png");
preload_image("images/projects_displays/3d_colored.png");

preload_image("images/projects_displays/ux_bw.png");
preload_image("images/projects_displays/gd_bw.png");
preload_image("images/projects_displays/games_bw.png");
preload_image("images/projects_displays/3d_bw.png");


(function($) {
    "use strict"; 
    
/* making the line in overview of the same height as text part  */
var divHeight = $('.overview-text-part').height(); 
$('.overview-line').css('min-height', divHeight+'px');
    
    
    
/* changing color on scroll in ABOUT section */
$(function() {
    
    const about = document.querySelector('.about')
    const wavetop = document.querySelector('.cls-3')
    const wavebottom = document.querySelector('.cls-1')

    
   $(window).scroll(function () {
       
        about.style.backgroundColor = "white";
        wavetop.style.fill = "white";
        wavebottom.style.fill = "white";
       
       
      if ($(this).scrollTop() > 300) {
        about.style.backgroundColor = "#E5E1FF";
        wavetop.style.fill = "#E5E1FF";
        wavebottom.style.fill = "#E5E1FF";
      }
       
        if ($(this).scrollTop() > 1250) {
        about.style.backgroundColor = "white";
        wavetop.style.fill = "white";
        wavebottom.style.fill = "white";
      }
       
   });
});

    
    


    
    
/* 3 preloading dots */
	$(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
	});


// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
	});

    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
    });


    
    
    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
    });

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);