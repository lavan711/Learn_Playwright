// Real QA Scenario: End-to-End Login for the App.vwo.com 


// openbrowser()
// goToLoginPage()
// enterCredentials()
// clickLogin()


//Callback hell is a situation where we have multiple nested callback functions, which can make the code difficult to read and maintain.

function openBrowser(callback) {
    console.log("Step 1: Opening the chrome Browser");
    setTimeout(function () {
        callback();
    }, 1000);
}

function goToLoginPage(callback) {
    setTimeout(function () {
        console.log("Step 2: Login page loaded");
        callback();
    }, 2000);
}

function enterCredentials(callback) {
    setTimeout(function () {
        console.log("Step 3: Credentials entered");
        callback();
    }, 1000);
}

function clickLogin(callback) {
    setTimeout(function () {
        console.log("Step 4: Login button clicked");
        callback();
    }, 1000);
}

// THIS IS CALLBACK HELL 👇
openBrowser(function () {
    goToLoginPage(function () {
        enterCredentials(function () {
            clickLogin(function () {
                console.log("Test Complete!")
            })
        })
    })
})


