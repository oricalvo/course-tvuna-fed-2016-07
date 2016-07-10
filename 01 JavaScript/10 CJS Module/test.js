var nt = require("./network");

var contacts = nt.getAllContacts();
contacts.forEach(function (contact) {
    console.log(contact.id + ", " + contact.name);
});
