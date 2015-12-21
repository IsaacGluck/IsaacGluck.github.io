// Reload page at the top
// window.onbeforeunload = function(){ window.scrollTo(0,0); }

$("document").ready(function($) {

	$(function sectionSize() {
	    $(".full").css('height', $(window).height());
	    $(".full").css('min-height', '700px');
	    $("#Contact").css('min-height', '700px');
	    $("#Portfolio").css('min-height', '950px');
	});

	//initialise Stellar.js
    $(window).stellar({
    	positionProperty: 'transform'
    });

	$(function(){

		$(".big-brand").click(function() {
	    	$('body').animate({
	        	scrollTop: $("body").offset().top
	    	}, 1500);
	    	return false;
		});

		$("#Home-Link").click(function() {
	    	$('body').animate({
	        	scrollTop: $("body").offset().top
	    	}, 1500);
	    	return false;
		});

		$("#About-Link").click(function() {
	    	$('body').animate({
	        	scrollTop: $("#About").offset().top
	    	}, 1500);
	    	return false;
		});

		$("#Portfolio-Link").click(function() {
	    	$('body').animate({
	        	scrollTop: $("#Portfolio").offset().top
	    	}, 1500);
	    	return false;
		});

		$("#Contact-Link").click(function() {
	    	$('body').animate({
	        	scrollTop: $("#Contact").offset().top
	    	}, 1500);
	    	return false;
		});

		$(".back-to-top").click(function() {
	    	$('body').animate({
	        	scrollTop: $("body").offset().top
	    	}, 2000);
	    	return false;
		});

		$(".fa-envelope-o").click(function() {
	    	$('body').animate({
	        	scrollTop: $("#Contact").offset().top
	    	}, 2000);
	    	return false;
		});
	});

	// Determines the heights of the parralax image panels
	$(function(){
		if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
			$('#ios-notice').removeClass('hidden');
			$('.parallax-container.break').height( $(window).height() * 0.4 | 0 );
		} else {
			
			$('.parallax-window.low').height(500);
		}
	});

	// On large devices, starts the nav, transparent & Scroll to top button
	var amountScrolled = 300;

	$(function(){
		$(document).scroll(function() {
    		if ($(document).scrollTop() > $(document).height()/55) {
    			$("nav").removeClass('transparent');
    		} else {
    			$("nav").addClass('transparent');
    		}

	    	if ( $(window).scrollTop() > amountScrolled ) {
	            $('a.back-to-top').fadeIn('slow');
	        } else {
	            $('a.back-to-top').fadeOut('slow');
	        }
		});
	});



	// Looks better on phones when you click on a nav item, the drop down disappears
	$(function(){
		$(".toggle-drop").click(function() {
			$("#isaac-nav").toggleClass("in");
		});

		$(".big-brand").click(function() {
			$("#isaac-nav").removeClass("in");
		});
	});
});