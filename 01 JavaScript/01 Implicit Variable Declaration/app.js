(function (){
    "use strict";

    function g() {
        for (var i = 0; i < 10; i++) {
            console.log("XXX");
        }
    }

    function f() {
        for (var i = 0; i < 10; i++) {
            g();
        }
    }

    f();
})();
