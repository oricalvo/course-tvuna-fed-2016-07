(function($) {
    "use strict";
    
    var contacts = [
        {id: 1, name: "Ori"},
        {id: 2, name: "Roni"},
    ];

    //var ul = $("#contacts");
    var ul = getElement(".contact-list");

    function updateView() {
        contacts.forEach(function (contact) {
            var li = $("<li><span></span><button>Delete</button></li>");
            var span = li.find("span");
            var button = li.find("button");

            span.text(contact.name);

            button.on("click", function () {
                alert(span.text());
            });

            ul.append(li);
        });
    }

    function getElement(selector) {
        var res = $(selector);
        if(!res.length) {
            throw new Error("Selector: " + selector + " was not found");
        }

        return res;
    }

})(jQuery);
