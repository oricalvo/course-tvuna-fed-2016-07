var ContactListView = (function($) {
    "use strict";
    
    function ContactListView(contacts) {
        this.contacts = contacts;
        this.ul = helpers.getElement(".contact-list");

        this.ul.css("color", "blue");
    }
    
    ContactListView.prototype.render = function() {
        var me = this;

        me.ul.empty();

        this.contacts.getAll().forEach(function (contact) {
            me.createItem(contact);
        });
    }
    
    ContactListView.prototype.createItem = function(contact) {
        var self = this;

        var li = $("<li><span></span><button>Delete</button></li>");
        var span = li.find("span");
        var button = li.find("button");

        span.text(contact.name);

        button.on("click", function() {
            self.buttonDelete_Clicked(contact);
        });

        this.ul.append(li);
    }

    ContactListView.prototype.buttonDelete_Clicked = function(contact) {
        this.contacts.delete(contact);

        this.render();
    }
    
    return ContactListView;
})(jQuery);
