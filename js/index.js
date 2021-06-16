//同じ日付で2回目以降ならローディング画面非表示の設定

var splash_text = $.cookie('accessdate'); //キーが入っていれば年月日を取得
var myD = new Date();//日付データを取得
var myYear = String(myD.getFullYear());//年
var myMonth = String(myD.getMonth() + 1);//月
var myDate = String(myD.getDate());//日
    
if (splash_text != myYear + myMonth + myDate) {//cookieデータとアクセスした日付を比較↓
        $(".load").css("display", "block");//１回目はローディングを表示
        setTimeout(function () {
            $(".breeding-rhombus-spinner").fadeIn(1000, function () {//1000ミリ秒（1秒）かけてロゴがフェードイン
                setTimeout(function () {
            $(".breeding-rhombus-spinner").fadeOut(1000);//1000ミリ秒（1秒）かけてロゴがフェードアウト
                }, 1000);//1000ミリ秒（1秒）後に処理を実行
        setTimeout(function () {
            $(".load").fadeOut(1000, function () {//1000ミリ秒（1秒）かけて画面がフェードアウト
            var myD = new Date();
            var myYear = String(myD.getFullYear());
            var myMonth = String(myD.getMonth() + 1);
            var myDate = String(myD.getDate());
            $.cookie('accessdate', myYear + myMonth + myDate); //accessdateキーで年月日を記録
        });
        }, 1700);//1700ミリ秒（1.7秒）後に処理を実行
    });
}, 1000);//1000ミリ秒（1秒）後に処理を実行
}else {
    $(".load").css("display", "none");//同日2回目のアクセスでローディング画面非表示
}  


// $(window).on('load',function(){
//     var loading = function(){
//       $('.load').fadeOut('fast');
//       $('#wrap').fadeIn('slow');
//     };
//     setTimeout(loading,4000); // setTimeoutを使って表示時間を設定する
//   });

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