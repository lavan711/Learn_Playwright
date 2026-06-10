//Async
console.log("Test 1: started");

setTimeout(function () {
    console.log("Test 2 : API response received!") 
    // This is an asynchronous callback function that will be executed after a delay of 2000 milliseconds (2 seconds).
}, 2000);

console.log("Test 3: Moving to next last");