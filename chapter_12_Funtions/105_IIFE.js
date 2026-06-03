// IIFE stands for Immediately Invoked Function Expression. 
// It is a JavaScript function that is executed immediately after it is defined.
//  The syntax for an IIFE is as follows:

(function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
})(300);


(function () {
    console.log("Hi");
})();


(function () {
    // playwright to run the test
})();

(function () {
    console.log("Staging")
})();

// IIFEs are often used to create a new scope for variables, which can help to avoid polluting the global scope.
(() => {
    console.log("Setup complete");
})();