var contacts = [
    { id: 1, name: "Ori3" },
    { id: 2, name: "Roni3" },
];

export function getTableRows(tableName) {
    return contacts;
}

function insertRow(tableName, contact) {
    contacts.push(contact);
}
