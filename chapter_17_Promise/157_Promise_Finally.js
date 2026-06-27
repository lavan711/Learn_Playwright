// The finally() method is used to specify a callback function that will be executed regardless of whether the Promise is fulfilled or rejected.
// It is typically used for cleanup actions that need to be performed after the Promise has settled, such as closing resources or resetting state.

let testRun = new Promise(function (resolve, reject) {
    let apiCall = false;
    if (apiCall) {
        resolve("API response is 200");
    }
    else {
        reject("API response is 400")
    }
});

testRun.then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    // // This code will be always executed anyhow. 
    console.log('API is executed even if it is failed or passed')
});

