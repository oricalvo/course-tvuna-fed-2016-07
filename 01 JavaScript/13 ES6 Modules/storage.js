"use strict";
var contacts = [
    { id: 1, name: "Ori3" },
    { id: 2, name: "Roni3" },
];
function getTableRows(tableName) {
    return contacts;
}
exports.getTableRows = getTableRows;
function insertRow(tableName, contact) {
    contacts.push(contact);
}
//# sourceMappingURL=storage.js.map