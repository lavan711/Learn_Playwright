    function outer() {
        let message = "hello";
        console.log("Outer CALLED!");
        function inner() {
            console.log(message);
        }
    return inner; //
    }


    let fn_inner = outer(); // Output: "Outer CALLED!"
    console.log(fn_inner()); // Output: "Outer CALLED!" and "hello"
    // inner(); // ReferenceError: inner is not defined