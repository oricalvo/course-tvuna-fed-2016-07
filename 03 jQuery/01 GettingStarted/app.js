(function($) {
    "use strict";
    
    var buttons = $("div button");

    buttons.html("x");

    //var spans = $("span");

    console.log(buttons);

    for(var i=0; i<buttons.length; i++) {
        var b = buttons[i];
        var $b = $(b);

        $b.html("yyy");

        //console.log("%O", buttons[i]);
    }
})(jQuery);
