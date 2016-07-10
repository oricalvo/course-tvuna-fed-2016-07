import * as nt from "./network";

var contacts = nt.getAllContacts();

for(let contact of contacts) {
    console.log(contact.id + ", " + contact.name);
}

// contacts.forEach(function (contact) {
//     console.log(contact.id + ", " + contact.name);
// });
