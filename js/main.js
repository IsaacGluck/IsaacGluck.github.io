$('document').ready(function($) {

  // base sizing
  $(function() {
    $('.full').css('height', $(window).height());
    $('.full').css('min-height', '700px');
    $('#Contact').css('min-height', '700px');
    $('#Portfolio').css('min-height', '950px');
    if ($(window).width() < 992) {
      $('#Portfolio').css('height', '1600px');
      $('.mobile-message').removeClass('invisible'); // make this a check for mobile/tablet
    }
    if ($(window).width() > 897) {
      $('#under-id').removeClass('under-1 under-2').addClass('under');
    } else if ($(window).width() < 897 && $(window).width() > 768) {
      $('#under-id').removeClass('under under-2').addClass('under-1');
    } else if ($(window).width() < 769) {
      $('#under-id').removeClass('under under-1').addClass('under-2');
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
  $(function() {
    $('.big-brand').click(function() {
      $('body, html').stop().animate({
        scrollTop: $('body').offset().top
      }, 1500);
      return false;
    });

    $('#Home-Link').click(function() {
      $('body, html').stop().animate({
        scrollTop: $('body').offset().top
      }, 1500);
      return false;
    });

    $('#About-Link').click(function() {
      $('body, html').stop().animate({
        scrollTop: $('#About').offset().top
      }, 1500);
      return false;
    });

    $('#Portfolio-Link').click(function() {
      $('body, html').stop().animate({
        scrollTop: $('#Portfolio').offset().top
      }, 1500);
      return false;
    });

    $('#Contact-Link').click(function() {
      $('body, html').stop().animate({
        scrollTop: $('#Contact').offset().top
      }, 1500);
      return false;
    });

    $('.back-to-top').click(function() {
      $('body, html').stop().animate({
        scrollTop: $('body').offset().top
      }, 2000);
      return false;
    });

    $('.fa-envelope-o').click(function() {
      $('body, html').stop().animate({
        scrollTop: $('#Contact').offset().top
      }, 2000);
      return false;
    });
  });

  // Determines the heights of the parralax image panels
  $(function() {
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
      $('#ios-notice').removeClass('hidden');
      $('.parallax-window.low').height($(window).height() * 0.4 | 0);
      console.log('here');
    } else {
      $('.parallax-window.low').height(500);
    }
  });

  // On large devices, starts the nav, transparent & Scroll to top button
  $(function() {
    $(document).scroll(function() {
      if ($(document).scrollTop() > $(document).height() / 55) {
        $('nav').removeClass('transparent');
      } else {
        $('nav').addClass('transparent');
      }

      if ($(window).scrollTop() > 300) {
        $('a.back-to-top').fadeIn('slow');
      } else {
        $('a.back-to-top').fadeOut('slow');
      }
    });
  });

  // Looks better on phones when you click on a nav item, the drop down disappears
  $(function() {
    $('.toggle-drop').click(function() {
      // $('#isaac-nav').toggleClass('in');
      $('#isaac-nav').collapse('hide');
    });

    $('.big-brand').click(function() {
      // $('#isaac-nav').removeClass('in');
      $('#isaac-nav').collapse('hide');
    });
  });
});
