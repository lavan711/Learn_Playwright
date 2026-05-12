var a = 10;// Global SCOPE

// var is function scoped

console.log(a);

function printHello() {
    console.log("Hello testing world!");
    var a = 20; // Local Scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a); // 30
    }

}

printHello();

var a = 50;

//Var can be redeclared and reassigned, so this can't be used in real world projects, it can lead to bugs and maintenance issues. 
// So, we should avoid using var and use let and const instead.