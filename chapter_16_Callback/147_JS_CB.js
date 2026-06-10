console.log("Test 1: started");

setTimeout(function () {
    console.log("Test 2: API response received");
}, 2000);

console.log("Test 3: moving to next test");

// **Why does Test 3 print before Test 2?**

// Test 3 prints before Test 2 because setTimeout is an asynchronous function that schedules the callback function to be executed after a specified delay (2000 milliseconds in this case). 
// When setTimeout is called, it does not block the execution of the subsequent code (Test 3). Instead, it registers the callback function to be executed after the delay and immediately moves on to execute Test 3. After the delay has passed, the callback function is executed, printing "Test 2: API response received". This is why Test 3 appears before Test 2 in the output.