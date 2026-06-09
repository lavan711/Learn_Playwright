// Object Creation and Manipulation

let config = {};
config.browser = "chrome";
config.timeout = 3000;
config.testname = "login test";

console.log(config);
delete config.browser;
console.log(config);
if (config.browser === "chrome") {
    console.log("I will execute my TC");
}
else {
    console.log("I will not execute my TC");
}

// We can also create an object using object literal syntax, which is a more concise way to create an object.
// Object literal syntax is a way to create an object using a pair of curly braces {} and defining the key-value pairs inside the braces.
let config2 = {
    browser: "chrome",
    timeout: 3000,
    testname: "login test"
};
console.log(config2);