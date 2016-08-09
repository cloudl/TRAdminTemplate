$(function(){
    $("#toggle").click(function(){
        $("aside").toggleClass("sideshow");
        if ($("aside").hasClass("sideshow")) {
            $("aside").animate({width:'230px'});
            $(".main").animate({paddingLeft:"230px"});
        } else {
            $("aside").animate({width:'0px'});
            $(".main").animate({paddingLeft:"0px"});
        }
    });
});