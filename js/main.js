$('document').ready(function($) {

  // base sizing
  $(function() {
    $('.full').css('height', $(window).height());
    $('.full').css('min-height', '700px');
    $('#Contact').css('min-height', '700px');
    $('#Portfolio').css('min-height', '950px');
    if ($(window).width() < 992) {
      $('#Portfolio').css('height', '1300px');
      $('.mobile-message').removeClass('invisible'); // make this a check for mobile/tablet
      $('#About').css('height', 'auto');
    }
    if ($(window).width() > 1200) {
    	$('#under-id').removeClass('under under-1 under-2').addClass('under-3');
    	$('#toCenter').removeClass('text-center');
    } else if ($(window).width() > 897 && $(window).width() < 1200) {
      $('#under-id').removeClass('under-1 under-2 under-3').addClass('under');
      $('#toCenter').removeClass('text-center');
    } else if ($(window).width() < 897 && $(window).width() > 768) {
      $('#under-id').removeClass('under under-2 under-3').addClass('under-1');
      $('#toCenter').removeClass('text-center');
    } else if ($(window).width() < 769) {
      $('#under-id').removeClass('under under-1 under-3').addClass('under-2');
      $('.to-center').addClass('text-center');
      $('#me').insertBefore($('#second-mobile'));
    }
    if (is.iphone()){
    	$('.mobile-small').css('font-size', '20px');
    }
  });

  // resizing
  $(function() {
    $(window).resize(function() {
      if ($(window).width() < 992) {
        $('#Portfolio').css('height', '1600px');
        $('.mobile-message').removeClass('invisible'); // make this a check for mobile/tablet
      } else {
        $('#Portfolio').css('height', $(window).height());
        $('.mobile-message').addClass('invisible'); // make this a check for mobile/tablet
      }

      if ($(window).width() > 897) {
        $('#under-id').removeClass('under-1 under-2').addClass('under');
      } else if ($(window).width() < 897 && $(window).width() > 768) {
        $('#under-id').removeClass('under under-2').addClass('under-1');
      } else if ($(window).width() < 769) {
        $('#under-id').removeClass('under under-1').addClass('under-2');
      }
    });
  });

  // backstretch image sizing
  $('#home-image').backstretch('img/city-dark.jpg');
  $('#about-image').backstretch('img/blur.jpg');
  $('#portfolio-image').backstretch('img/trees-grad.jpg');
  $('img[src$="city-dark.jpg"]').addClass('fixd');

  // Smooth scrolling
  var scroll = function(key, val) {
  	$(key).click(function() {
      $('body, html').stop().animate({
        scrollTop: $(val).offset().top
      }, 1750);
      return false;
    });
  };

  $(function() {
  	var scrollers = {
  		'.big-brand': 'body',
			'#Home-Link': 'body',
			'#About-Link': '#About',
			'#Portfolio-Link': '#Portfolio',
			'#Contact-Link': '#Contact',
			'.back-to-top': 'body',
			'.fa-envelope-o': '#Contact'
  	};
  	for (var key in scrollers) {
  		scroll(key, scrollers[key]);
  	}
  });

  // Determines the heights of the parralax image panels
  $(function() {
    if (is.mobile() || is.tablet()) {
      $('#ios-notice').removeClass('hidden');
      $('.parallax-window.low').height($(window).height() * 0.4 | 0);
    } else {
      $('.parallax-window.low').height(500);
    }
  });

  // Scroll features
  var scrollFeatures = {
  	activate:function(elem) {
  		['#Home-Link', '#About-Link', '#Portfolio-Link', '#Contact-Link', ].forEach(function(i){
  			$(i).removeClass('act');
  		});
  		$(elem).addClass('act');
  	},

  	changeAct:function(point, offset) {
  		if($(document).scrollTop() >= $(point).position().top - offset){
  			scrollFeatures.activate(point + '-Link');
  		}
  	},

	  scrollPoints:function() {
	  	var points = {'#Home': 0,
	  		'#About': 50,
	  		'#Portfolio': 50,
	  		'#Contact': 50
	  	};
	  	for (var point in points) {
	  		scrollFeatures.changeAct(point, points[point]);
	  	}
	  },

	  animateNav:function() {
	  	if ($(document).scrollTop() > $(document).height() / 55) {
	  		$('nav').removeClass('transparent');
	  	} else {
	  		$('nav').addClass('transparent');
	  	}
	  },

	  backToTop:function(pos,len) {
	  	if ($(window).scrollTop() > pos) {
	  		$('a.back-to-top').fadeIn(len);
	  	} else {
	  		$('a.back-to-top').fadeOut(len);
	  	}
	  }
	};

  $(function() {
  	// run prior to scrolling to highlight current location
  	scrollFeatures.scrollPoints();
  	scrollFeatures.animateNav();
  	scrollFeatures.backToTop(400, 'slow');
    $(document).scroll(function() {
    	// Animate nav
    	scrollFeatures.animateNav();

      // Back to top button
      scrollFeatures.backToTop(400, 'slow');

      // Active links with scrolling
      scrollFeatures.scrollPoints();
    });
  });

  // Looks better on phones when you click on a nav item, the drop down disappears
  $(function() {
    $('.toggle-drop').click(function() {
      $('#isaac-nav').collapse('hide');
    });

    $('.big-brand').click(function() {
      $('#isaac-nav').collapse('hide');
    });
  });
});
