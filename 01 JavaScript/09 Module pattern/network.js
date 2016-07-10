var network = (function (storage) {
    "use strict";

    function getAllContacts() {
        return storage.getTableRows("contacts");
    }

    return {
        getAllContacts: getAllContacts,
    };
})(storage);
