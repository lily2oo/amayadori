$(function () {
    $("#fv").css({
        "background-color": "transparent",
    });
});


// Create a closure
(function () {
    // Your base, I'm in it!
    var originalAddClassMethod = jQuery.fn.addClass;

    jQuery.fn.addClass = function () {
        // Execute the original method.
        var result = originalAddClassMethod.apply(this, arguments);

        // trigger a custom event
        jQuery(this).trigger('cssClassChanged');

        // return the original result
        return result;
    }
})();

// document ready function
$(function () {
    $(".section").bind('cssClassChanged', function () {
        $(".active").animate({
            "opacity": "1"
        }, 1500)

        $('.active .tlt').textillate({
            loop: true, //ループ
            minDisplayTime: 3000, //テキストが置き換えられるまでの時間//
            initialDelay: 300,         //遅延時間
            // フェードイン
            in: {
                effect: 'fadeIn', //アニメーション効果、エフェクトの種類
                delayScale: 1.5, //遅延時間の指定
                delay: 45, //文字ごとの遅延時間
                sync: false, //『true』全ての文字に同時に適応される
                shuffle: false //ランダム
            }
        });
    });
});