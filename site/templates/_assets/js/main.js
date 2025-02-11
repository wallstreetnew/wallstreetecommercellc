/**
 *
 * Document Ready Functions
 *
 **/

$(document).ready(function() {

  /*----------  Off Canvas Utilities  ----------*/
  $('#oc-icon, .oc-overlay').stop().click(function() {
    $('.oc-js').toggleClass('active');
  });

  $('span.oc-toggle').stop().click(function(e) {
    e.preventDefault();
    $(this).next('ul').stop().slideToggle();
    if ($(this).hasClass('fa-plus')) {
      $(this).stop().removeClass('fa-plus').addClass('fa-minus');
    } else {
      $(this).stop().removeClass('fa-minus').addClass('fa-plus');
    }
  });

  // Nav scrolled
  var scrollTop = $(window).scrollTop();

  if (scrollTop >= 100) {
    $('header').addClass('scrolled');
  } else {
    $('header').removeClass('scrolled');
  }

  /*----------  Table Scroll  ----------*/
  // Show an overlay on responsive tables the first time a user sees them
  var scrollTipCookie = document.cookie;
  //if (scrollTipCookie == "") {
    $('.table-responsive').addClass('relative');
    $('<div class="scroll-overlay">SWIPE TO SCROLL <img src="site/templates/_assets/img/common/scroll.png" alt="swipe to scroll" style="height:50px;" /></div>').insertBefore('.table-responsive .table');
  //}
  $('.scroll-overlay').on('click touchstart mouseover', function () {
    document.cookie = "scrollTip";
    $('.scroll-overlay').fadeOut();
  });
  //console.log(scrollTipCookie);

  // Scroll Reveal

  window.sr = ScrollReveal({ reset: true });

  for (i = 0; i < 40; i ++) {
    sr.reveal('.reveal-up-'+i, {
      origin:     'bottom',
      distance:   '100px',
      duration:   1250,
      delay:      150,
      opacity:    0,
      scale:      1,
      mobile:     true,
      reset:      true,
      viewFactor: 0.1,
      beforeReveal: function (domEl) {
        domEl.classList.remove("invisible");
      },
    }, 250);

    sr.reveal('.reveal-fade-'+i, {
      origin:     'bottom',
      distance:   '0',
      duration:   1250,
      delay:      150,
      opacity:    0,
      scale:      1,
      mobile:     true,
      reset:      true,
      viewFactor: 0.1,
      interval: 300,
      beforeReveal: function (domEl) {
        domEl.classList.remove("invisible");
      },
    }, 250);

    sr.reveal('.reveal-down-'+i, {
      origin:     'top',
      distance:   '100px',
      duration:   1250,
      delay:      150,
      opacity:    0,
      scale:      1,
      mobile:     true,
      reset:      true,
      viewFactor: 0.1,
      beforeReveal: function (domEl) {
        domEl.classList.remove("invisible");
      },
    }, 250);

    sr.reveal('.reveal-left-'+i, {
      origin:     'right',
      distance:   '100px',
      duration:   1250,
      delay:      100,
      opacity:    0,
      scale:      1,
      mobile:     true,
      viewFactor: 0.1,
      reset: true,
      beforeReveal: function (domEl) {
        domEl.classList.remove("invisible");
      },
    }, 150);

    sr.reveal('.reveal-right-'+i, {
      origin:     'left',
      distance:   '100px',
      duration:   1250,
      delay:      100,
      opacity:    0,
      scale:      1,
      mobile:     true,
      viewFactor: 0.1,
      reset: true,
      beforeReveal: function (domEl) {
        domEl.classList.remove("invisible");
      },
    }, 150);

    sr.reveal('.reveal-in-'+i, {
      origin:     'top',
      distance:   '0',
      duration:   1250,
      delay:      100,
      opacity:    0,
      scale:      .5,
      mobile:     true,
      viewFactor: 0.4,
      reset: true,
      beforeReveal: function (domEl) {
        domEl.classList.remove("invisible");
      },
    }, 150);

    sr.reveal('.fade-in-'+i, {
      origin:     'top',
      distance:   '0',
      duration:   1250,
      delay:      100,
      opacity:    0,
      scale:      1,
      mobile:     true,
      viewFactor: 0.4,
      reset: true,
      beforeReveal: function (domEl) {
        domEl.classList.remove("invisible");
      },
    }, 150);
  }

  // Get window width
  windowWidth = $(window).width();

  // MatchHeight .eh Elements
  //$.fn.matchHeight._maintainScroll = true;

  $(".eh").matchHeight();

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    touchThreshold: 500,
    swipeToSlide: true,
    lazyLoad: 'progressive',
    speed: 1200
  });

  $('.nav-search #desktop-search').click(function () {
    if ($(window).width() < 768) {
      window.location.href = "/search/";
    } else {
      $('.search-form').toggleClass('active');
    }
  });

  (function($) {
    $.fn.cycle = function(timeout, cls) {
        var l = this.length,
            current = 0,
            prev = 0,
            elements = this;

        if (this.filter('.active').length > 0) {
            current = this.index(this.filter('.active')[0]) + 1;
            prev = current - 1;
        }

        function next() {
            elements.eq(prev).removeClass('active');
            elements.eq(current).addClass('active');
            prev = current;
            current = (current + 1) % l;
            setTimeout(next, timeout);
        }
        setTimeout(next, timeout);
        return this;
    };
  }(jQuery));

  $('div.testimonial').cycle(6000, 'active');

});

/**
 *
 * Window Resize Functions
 *
 **/

$(window).resize(function() {

  /*----------  Off Canvas Menu Hide  ----------*/
  var windowWidth = $(window).width();

  if (windowWidth >= 768) {
    $('.oc-js').removeClass('active');
    $('span.oc-toggle').each(function() {
      $(this).removeClass('fa-minus').addClass('fa-plus');
      $(this).next('ul').css('display', '');
    });
  }

  // MatchHeight Update
  //$.fn.matchHeight._update();

});

/**
 *
 * Window Scroll Functions
 *
 **/

$(window).scroll(function() {
  // Nav scrolled
  var scrollTop = $(window).scrollTop();

  if (scrollTop >= 100) {
    $('header').addClass('scrolled');
  } else {
    $('header').removeClass('scrolled');
  }

});
