//This is a perfectly normal function. 
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}
validateStatusCode(300);

// This is a function as an expression.
// 
const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}
validateStatusCode_Exp(200);


// Arrow function 
// Arrow functions are a more concise way to write functions in JavaScript.
const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is good!")
    }
}

validateStatusCode_Arrow(204);