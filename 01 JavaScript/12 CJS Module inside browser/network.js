var storage = require("./storage");

function getAllContacts() {
    return storage.getTableRows("contacts");
}

exports.getAllContacts = getAllContacts;