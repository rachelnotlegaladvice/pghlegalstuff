'use strict';

$(document).ready(function(){
    // /**
    //  * Ensure each section is minimally the viewport height
    //  */
    //  $(".section-item").css("min-height", $(window).height());
    //      $(window).resize(function(){
    //          $(".section-item").css("min-height", $(window).height());
    //  });
     /**
      * Collapse navbar when selecting an option
      */
     $('.navbar-collapse .nav a').on('click', function(){
        $(".navbar-collapse").collapse('hide'); //bootstrap 3.x by Richard
      });
      /**
       * Animate anchor links
       */
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
    /**
     * Open all external links in new window
     */
    $('a').not('[href*="mailto:"]').each(function () {
  		var isInternalLink = new RegExp('/' + window.location.host + '/');
  		if ( ! isInternalLink.test(this.href) ) {
  			$(this).attr('target', '_blank');
  		}
  	});
 });
