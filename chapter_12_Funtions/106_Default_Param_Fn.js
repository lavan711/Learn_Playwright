// Default parameters allow you to specify default values for function parameters.
// If a parameter is not provided when the function is called, the default value will be used.

function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetries} times, ${delay}ms apart`);
}

retry("Login Test"); 
retry("Registeration Test", 5, 2000);