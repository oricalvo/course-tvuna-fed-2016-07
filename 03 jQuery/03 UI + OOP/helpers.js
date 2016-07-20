var helpers = (function() {

    function getElement(selector) {
        var res = $(selector);
        if (!res.length) {
            throw new Error("Selector: " + selector + " was not found");
        }

        return res;
    }

    return {
      getElement: getElement,  
    };
})();
