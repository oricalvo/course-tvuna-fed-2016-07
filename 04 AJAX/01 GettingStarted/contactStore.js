var ContactStore = (function() {
    "use strict";

    function ContactStore() {
        this.contacts = null;
    }
    
    ContactStore.prototype.getAll = function(success, error) {
        $.ajax({
            type: "GET",
            url: "contacts.json",
            success: function(contacts) {
                try {
                    contacts.forEach(function (contact) {
                        contact.email = contact.name + "@gmail.com";

                        throw new Error("Oops");
                    });
                }
                catch(err) {
                    error(err);
                    return;
                }

                success(contacts);
            },
            error: error
        });
    }

    return ContactStore;
})();
