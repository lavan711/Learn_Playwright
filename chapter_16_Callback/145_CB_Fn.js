//callback function - it is a function that is passed as an argument to another function and is executed after some operation has been completed.


function cafe(item, callWhenTableisReady) {
    console.log("Finding...1");
    console.log("Finding...2");
    console.log("Finding...3");
    console.log(item)
    callWhenTableisReady();
}

function callWhenTableisReady() {
    console.log("calling 9876543210");

}


//First way
cafe("Burger", callWhenTableisReady);

//Second way - Anoymous Fn
cafe("Pizza", function () {
    console.log("calling 8765432123");
})


//Third way - Arrow Fn
cafe("Momos", () => {
    console.log("calling 3543543");
});
