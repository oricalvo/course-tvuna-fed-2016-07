"use strict";
var nt = require("./network");
var contacts = nt.getAllContacts();
for (var _i = 0, contacts_1 = contacts; _i < contacts_1.length; _i++) {
    var contact = contacts_1[_i];
    console.log(contact.id + ", " + contact.name);
}
//# sourceMappingURL=test.js.map