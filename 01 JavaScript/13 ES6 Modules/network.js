"use strict";
var storage_1 = require("./storage");
function getAllContacts() {
    return storage_1.getTableRows("contacts");
}
exports.getAllContacts = getAllContacts;
//# sourceMappingURL=network.js.map