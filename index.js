$(document).ready(function(){
    $(".navi>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(500);
    }).mouseout(function(){
        $(this).find(".submenu").stop().slideUp(500);
    });
// /////////////////////////////////////////////////////////
    var objleft = $(".imgslide ul");
    
    setInterval(function(){
        objleft.animate({
            "marginLeft":"-="+ 800},400,function(){
            objleft.find('li').eq(0).appendTo(objleft);
            objleft.css({"marginLeft":0});
            });
        },3000);
// //////////////////////////////////////////////////////////

$(function(){
    $(".tabmenu>li>a").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
        return false;
    });
});

// ///////////////////////////////////////////////////////////

$(".notice li:first").click(function(){
    $("#modal").addClass("active");
});
$(".btn").click(function(){
    $("#modal").removeClass("active");
});
    
});