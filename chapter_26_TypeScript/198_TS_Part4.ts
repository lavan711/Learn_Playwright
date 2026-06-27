function sayHello(msg: string): void {
    console.log(msg);
}
sayHello("HELLO");


// Function annotations
function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Lavanya"));


// never - function never returns (throws or infinite loop)
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) { }
}