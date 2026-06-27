let apiCall = new Promise(function (resolve, reject) { 
    reject({
        status: 500,
        body: "Internal Server Error"
    })
});

apiCall.then(function (response) {
    console.log(response.status);
}).catch(function (error) {
    console.log(error.status, error.body);
});

// .catch() runs ONLY when the promise is rejected.