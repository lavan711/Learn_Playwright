interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply: (a: number, b: number) => number; // Alternative syntax

}

const noObject = {
    id: 1
}


const calc: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b
}

console.log(calc.add(5, 3));
console.log(calc.subtract(5, 3));
console.log(calc.multiply(5, 3));
