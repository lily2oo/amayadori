$(function () {
    $("#fv").css({
        "background-color": "transparent",
    });
});

$(function () {
    var breakPoint = 768;
    var event = $(window).innerWidth() > breakPoint ? 'mouseover' : 'touchstart';
    $("#pagepiling div:nth-child(n+1):nth-child(-n+7)").on(event, function () {
        $(".active").animate({
                opacity: 1
            },
            1500
        );
    });
});