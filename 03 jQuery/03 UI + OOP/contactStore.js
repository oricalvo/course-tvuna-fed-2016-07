var ContactStore = (function() {
    "use strict";
    
    function ContactStore() {
        this.contacts = [
            {id: 1, name: "Ori"},
            {id: 2, name: "Roni"},
        ];
    }

    ContactStore.prototype.getAll = function(contact) {
        return this.contacts;
    }

    ContactStore.prototype.delete = function(contact) {
        var index = this.getContactIindex(contact);

        this.contacts.splice(index, 1);
    }

    ContactStore.prototype.getContactIindex = function(contact) {
        for(var i=0; i<this.contacts.length; i++) {
            if(this.contacts[i] == contact) {
                return i;
            }
        }

        throw new Error("Contact was not found");
    }

    return ContactStore;
})();
