'use strict';

$(document).ready(function(){
    //  $(".section-item").height(($(window).height() > $(".section-item").height ? $(window).height() : 'auto'));
    //      $(window).resize(function(){
    //          $(".section-item").height($(window).height());
    //  });
     $('.navbar-collapse .nav a').on('click', function(){
        $(".navbar-collapse").collapse('hide'); //bootstrap 3.x by Richard
      });
      $('a[href^="#"]').on('click',function (e) {
  	    e.preventDefault();

  	    var target = this.hash;
  	    var $target = $(target);

  	    $('html, body').stop().animate({
  	        'scrollTop': $target.offset().top
  	    }, 900, 'swing', function () {
  	        window.location.hash = target;
  	    });
  	});
 });
