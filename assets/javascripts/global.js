$(document).ready(function() {
	
	// # link scrollto

	$('a[href^="#"]').not('.static').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	         'scrollTop': $target.offset().top
	    }, 900, 'swing');
	});

}); 