(function (nt, st) {
    "use strict";

    var contacts = nt.getAllContacts();
    contacts.forEach(function (contact) {
        console.log(contact.id + ", " + contact.name);
    });
})(network, storage);
