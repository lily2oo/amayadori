$(function(){
        $("#fv").css({
            "background-color":"transparent",
        });
});
$(function(){
    $("#pagepiling div:nth-child(n+2):nth-child(-n+7)").on("mouseover", function(){
        $(this).animate({
            opacity:1
        },
        1500
        );
    });
});