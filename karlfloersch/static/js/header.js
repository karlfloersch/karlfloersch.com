var isAnimating = false;
$( document ).ready(function() {
    	$(".navbar").hide();
});
$(window).scroll(function (event) {

    var scroll = $(window).scrollTop();
    if(scroll < 180 && $('.navbar').is(':visible')&& !$('.navbar').is(':animated')){
    	$(".navbar").hide(100);
    }else if(scroll >= 180  && !$('.navbar').is(':visible') && !$('.navbar').is(':animated')) {
    	$(".navbar").show(100);
    }
});

