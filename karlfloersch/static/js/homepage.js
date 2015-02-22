$( document ).ready(function() {
    calcAddr();

    $(".addr-input").click(function(){
        var currentNum = $(this).text();
        var newNum;
        if(currentNum == "1")
            newNum = "0";
        else
            newNum = "1";
        $(this).html(newNum);
        calcAddr();
    });
});

function calcAddr(){
    var carry = parseInt($("#addr-carry").text());
    var A = parseInt($("#addr-B").text());
    var B = parseInt($("#addr-A").text());

    var S = ( A && !B ) || ( !A && B );
    var Cout = S && carry;
    Cout = (A && B) || (Cout);
    S = ( S && !carry ) || ( !S && carry );
    if(S)
        $("#addr-S").html("1");
    else
        $("#addr-S").html("0");
    if(Cout)
        $("#addr-Cout").html("1");
    else
        $("#addr-Cout").html("0");

}

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
        timeCounter ++;
        if(timeCounter == 1){
           resizeLogicGates();
           if(scroll/_docHeight >= 0.5669497060744612){
                $(".addr-output").show();
            }else{
                $(".addr-output").hide();
            }

        }
    }, 300);
});
var imageHeightOffset = -90;
function resizeLogicGates() {
	var _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
    var _docWidth = (document.width !== undefined) ? document.width : document.body.offsetWidth;
    var imageHeight = $("#image-end").position()['top'] + imageHeightOffset;
	$(".logic-gates").css("height", imageHeight);
	if($(".homepage-adder").width() < 740){
		$(".homepage-adder").css("width", _docWidth);
	}else{
		$(".homepage-adder").css("width", "inherit");
	}
    if(_docWidth < 638){
        $("#addr-carry").css("left", -(638-_docWidth)*.106719368 - 95);
        $("#addr-A").css("left", +(638-_docWidth)*.106719368 + 145);
    }else{
        $("#addr-carry").css("left", -95);
        $("#addr-A").css("left", 145);
    }

    $(".addr-output").css("top", imageHeight + 20); 

    if(_docWidth > 545){
        $("#addr-Cout").css("left", -95);
        $("#addr-S").css("left", 120);
    }else{
        $("#addr-Cout").css("left", -114);
        $("#addr-S").css("left", 144);
    }

};

$(window).scroll(function (event) {
    var _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
    var logicHeight = _docHeight*.68;
    var scroll = $(window).scrollTop();
    var imageHeight = $("#image-end").position()['top'] + imageHeightOffset;
    console.log("doc height: " + _docHeight);
    console.log("scroll: " + scroll);
    console.log("scroll/doc height; "  + scroll/_docHeight);
    if(scroll >= imageHeight){
        $(".addr-output").show();
    }else{
        $(".addr-output").hide();
    }
    console.log($("#image-end").position());

    $("#gates").css("clip", "rect(0px, 500px," + scroll*1.0 + "px, 0px")
});



