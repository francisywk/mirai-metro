(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 800, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 15) {
      $('#btn-scroll-top').fadeIn();
    } else {
      $('#btn-scroll-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  // navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  var maxHeight=0;
  $(".tab-content .tab-pane").each(function(){
      $(this).addClass("active");
     var height = $(this).height();
      maxHeight = height>maxHeight?height:maxHeight;
      $(this).removeClass("active");
  });
  $(".tab-content .tab-pane:first").addClass("active");
  $(".tab-content").height(maxHeight);

  var dt = new Date();
  var strYear = dt.getFullYear();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var timezone = -(dt.getTimezoneOffset()/60);
  var strDate = dt.getDate() + " " + months[dt.getMonth()] + " " + dt.getFullYear();
  var strTime = (("0" + dt.getHours()).slice(-2)) + ":" + (("0" + dt.getMinutes()).slice(-2)) + " (UTC" + (timezone < 0 ? "" : "+") + timezone + ")";
  var strDateTimeZH = dt.getFullYear() + "年" + dt.getMonth() + "月" + dt.getDate() + "日" + ", " + (("0"+dt.getHours()).slice(-2)) + ":" + (("0"+dt.getMinutes()).slice(-2));
  $(".todaydate").html(strDate);
  $(".currenttime").html(strTime);
  $(".datetime").html(strDate + ", " + strTime); 
  $(".datetimeZH").html(strDateTimeZH); 
  $("#year").html(strYear);
  
})(jQuery); // End of use strict