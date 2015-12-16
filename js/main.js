$("document").ready(function($) {

	function sectionSize() {
		var sections = [".home-section", ".about-section", ".portfolio-section", ".contact-section"];
	    var size = $(window).height();
	    sections.forEach(function(element) {
	    	$(element).css('height', size);
	    });
	};

	sectionSize();

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('a.page-scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 2000, 'easeInOutCubic');
			event.preventDefault();
		});
	});

	$('body').scrollspy({
    	target: '.navbar-fixed-top'
    });

	// Determines the heights of the parralax image panels
	$(function(){
		if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
			$('#ios-notice').removeClass('hidden');
			$('.parallax-container.break').height( $(window).height() * 0.4 | 0 );
		} else {
			$('.parallax-container.break').height(500);
		}
	});

	// On large devices, starts the nav transparency, & scroll to top button
	var amountScrolled = 300;

	$(function(){
		$(document).scroll(function() {
    		if ($(document).scrollTop() > $(document).height()/20) {
    			$("nav").removeClass('tran');
    		} else {
    			$("nav").addClass('tran');
    		}

	    	if ( $(window).scrollTop() > amountScrolled ) {
	            $('a.back-to-top').fadeIn('slow');
	        } else {
	            $('a.back-to-top').fadeOut('slow');
	        }
		});
	});



	// Looks better on phones when you click on a nav item, the drop down disappears
	$(".toggle-drop").click(function() {
		$("#isaac-nav").toggleClass("in");
	});

	$(".big-brand").click(function() {
		$("#isaac-nav").removeClass("in");
	});
});