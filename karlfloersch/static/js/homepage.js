$( document ).ready(function() {
    resizeLogicGates();
});

var timeCounter = 0;
$(function() {
    var $window = $(window);
    var width = $window.width();
    var height = $window.height();

    setInterval(function () {
        if ((width != $window.width()) || (height != $window.height())) {
            width = $window.width();
            height = $window.height();
            resizeLogicGates();
        }
    }, 300);
});


function resizeLogicGates() {
	var _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
	$(".logic-gates").css("height", _docHeight*.68);
	if($(".homepage-adder").width() < 740){
		var _docWidth = (document.width !== undefined) ? document.width : document.body.offsetWidth;
		$(".homepage-adder").css("width", _docWidth);
	}else{
		$(".homepage-adder").css("width", "inherit");
	}
};


$(window).scroll(function (event) {
    var _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
    var logicHeight = _docHeight*.68;
    var scroll = $(window).scrollTop();
    console.log("doc height: " + logicHeight);
    console.log(scroll);

    $("#gates").css("clip", "rect(0px, 500px," + scroll*1.1 + "px, 0px")
});

