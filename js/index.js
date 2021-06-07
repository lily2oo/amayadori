$(function () {
    $("#fv").css({
        "background-color": "transparent",
    });
});


// Create a closure
(function(){
    // Your base, I'm in it!
    var originalAddClassMethod = jQuery.fn.addClass;

    jQuery.fn.addClass = function(){
        // Execute the original method.
        var result = originalAddClassMethod.apply( this, arguments );

        // trigger a custom event
        jQuery(this).trigger('cssClassChanged');

        // return the original result
        return result;
    }
})();

// document ready function
$(function(){
    $(".section").bind('cssClassChanged', function(){ 
        $(".active").animate({
            "opacity":"1"
        },1500);
    });
});