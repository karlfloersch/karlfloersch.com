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

function resizeLogicGates() {
	var _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
    var _docWidth = (document.width !== undefined) ? document.width : document.body.offsetWidth;
	$(".logic-gates").css("height", _docHeight*.68);
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

    if(_docWidth > 976)
        $(".addr-output").css("top", 2110);
    else if(_docWidth > 621)
        $(".addr-output").css("top", 2214);
    else if(_docWidth > 552)
        $(".addr-output").css("top", 2265);
    else if(_docWidth > 545)
        $(".addr-output").css("top", 2320);
    else if(_docWidth > 538)
        $(".addr-output").css("top", 2373);
    else if(_docWidth > 474)
        $(".addr-output").css("top", 2425);
    else if(_docWidth > 453)
        $(".addr-output").css("top", 2482);
    else if(_docWidth > 443)
        $(".addr-output").css("top", 2532);
    else if(_docWidth > 408)
        $(".addr-output").css("top", 2586);
    else if(_docWidth > 391)
        $(".addr-output").css("top", 2640);
    else if(_docWidth > 0)
        $(".addr-output").css("top", 2696);

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
    console.log("doc height: " + logicHeight);
    console.log(scroll);
    console.log("deveide "  + scroll/_docHeight);
    if(scroll/_docHeight >= 0.5669497060744612){
        $(".addr-output").show();
    }else{
        $(".addr-output").hide();
    }

    $("#gates").css("clip", "rect(0px, 500px," + scroll*1.2 + "px, 0px")
});

