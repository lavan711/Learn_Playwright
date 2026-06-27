//Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
// It allows you to write asynchronous code in a more synchronous and readable manner.
//  A Promise can be in one of three states: pending, fulfilled, or rejected.

let order = new Promise(function (resolve, reject) {
    let foodready = true;
    if (foodready) {
        resolve("Pizza is delivered. Food is ready. ");
    } else {
        reject("Order cancelled because of rain.")
    }
})

console.log(order);

