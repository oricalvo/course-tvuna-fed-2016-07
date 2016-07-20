(function() {
    "use strict";

    $("button").click(function() {
        var contact = {
            id:1,
            name: "Ori",
            emails: ["1", "2", "3"]
        };

        $.ajax({
            type: "POST",
            dataType: "jsonp",
            url: "http://google.com/api/contact",
            //url: "/api/contact",
            data: JSON.stringify(contact),
            success: function() {
            },
            error: function() {
                console.log("ERROR");
            }
        });


    });
})();
