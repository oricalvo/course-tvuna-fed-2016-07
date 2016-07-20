(function($) {
    "use strict";

    var contactStore = new ContactStore();
    
    var contactListView = new ContactListView(contactStore);
    contactListView.render();
    
})(jQuery);
