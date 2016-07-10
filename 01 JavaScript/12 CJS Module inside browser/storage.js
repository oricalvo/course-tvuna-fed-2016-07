var contacts = [
    { id: 1, name: "Ori" },
    { id: 2, name: "Roni" },
];

function getTableRows(tableName) {
    return contacts;
}

function insertRow(tableName, contact) {
    contacts.push(contact);
}

exports.getTableRows = getTableRows;
