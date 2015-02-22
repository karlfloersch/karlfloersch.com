var isAnimating = false;
$( document ).ready(function() {
    	$(".navbar").hide();
    	changeBinaryWord();
 });
$(window).scroll(function (event) {

    var scroll = $(window).scrollTop();
    if(scroll < 180 && $('.navbar').is(':visible')&& !$('.navbar').is(':animated')){
    	$(".navbar").hide(100);
    }else if(scroll >= 180  && !$('.navbar').is(':visible') && !$('.navbar').is(':animated')) {
    	$(".navbar").show(100);
    }
});


var words = ["l1fe", "w0rk", "t1me", "l0ve", "b1os", "c0de", "m1nd", "s0ul"];
var wordsLength = words.length;
function changeBinaryWord() {
    var nextWord = Math.floor(Math.random()*wordsLength);
    $("#binary-words").html(words[nextWord]);
    nextWord ++;
    if(nextWord >= wordsLength){
        nextWord = 0;
    }
}

$(function () {
    $('.hover-png').hover( function () {
        $(this).attr('src', $(this).attr('src').replace(/\.png/, '-on.png') );
    }, function () {
        $(this).attr('src', $(this).attr('src').replace('-on.png', '.png') );
    });
});