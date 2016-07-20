(function() {
    "use strict";

    // setTimeout(function() {
    // }, 1000);

    // delay(1000).then(function() {
    //     console.log("timeout");
    // });
    
    doSomethingAsync().then(function() {
        execute2().then(function() {
            execute3();
        });
    });



    return httpGet().delay(2000);

    function delay(timeout) {
        var deferred = Q.defer();

        deferred.resolve();
        deferred.reject();

        deferred.promise;

        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve();
            }, timeout);
        });
    }

    function tran(dalContacts) {
        var contacts = dalContacts.map(function(contact) {
            contact.email = "diojdoijd";

            //throw new Error("oops");

            return contact;
        });

        return contacts;
    }

    var network = {
        httpGet: function(url) {
            return $.ajax({
                type: "GET",
                url: url,
            }).then(function(contacts) {
                return delay(2000).then(function() {
                    return contacts;
                });
            });
        }
    }

    var dal = {
        getAllContacts: function() {
            return network.httpGet("contacts.json");
        }
    };

    var bl = {
        getAllContacts: function() {
            return dal.getAllContacts().then(tran);
        }
    };

    bl.getAllContacts().then(function(contacts) {
        console.log("SUCCESS");
    }).catch(function() {
        console.log("ERROR");
    });

    // var network = {
    //     httpGet: function(url, success, error) {
    //         $.ajax({
    //             type: "GET",
    //             url: url,
    //             success: success,
    //             error: error,
    //         });
    //     }
    // };
    //
    // var dal = {
    //     getAllContacts: function(success, error) {
    //         network.httpGet("contacts.json", success, error);
    //     }
    // };
    //
    // var bl = {
    //     getAllContacts: function(success, error) {
    //         dal.getAllContacts(function(dalContacts) {
    //             try {
    //                 var contacts = tran(dalContacts);
    //
    //                 success(contacts);
    //             }
    //             catch(err) {
    //                 if(error) {
    //                     error(err);
    //                 }
    //             }
    //         }, function(err) {
    //             if(error) {
    //                 error(err);
    //             }
    //         });
    //     }
    // };
    //
    // bl.getAllContacts(function(contacts){
    //     console.log("SUCCESS");
    // }, function(err) {
    //     console.log("ERROR");
    // })
})();
