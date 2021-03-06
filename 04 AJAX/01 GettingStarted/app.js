(function() {
    "use strict";

    var viewModel = {
        remove: function() {
            var contact = this;

            var index = findByIndex(contact);
            if(index != -1) {
                viewModel.contacts.splice(index, 1);
            }
        },
        newName: ko.observable(""),
        reset: function() {
            viewModel.newName("");
        },
        add: function() {
            var contact = {
                id: -1,
                name: viewModel.newName(),
            };

            viewModel.contacts.push(contact);
        },
        contacts: ko.observableArray([]),
    };

    function findByIndex(contact) {
        var contacts = viewModel.contacts();
        for(var i=0; i<contacts.length; i++) {
            if(contacts[i] == contact) {
                return i;
            }
        }

        return -1;
    }

    ko.applyBindings(viewModel);

    var contactStore = new ContactStore();
    contactStore.getAll(function(contacts) {
        viewModel.contacts(contacts);
    }, function(err) {
        console.log("ERROR: " + err.message);
    });
})();
