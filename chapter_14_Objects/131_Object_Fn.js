// Objects Functions

const calculator = {
    value: 0,
    add(n) {
        this.value += n;
    },
    subtract(n) {
        this.value -= n;
    }
}

calculator.add(10);
console.log(calculator.value); // 10
calculator.subtract(5);
console.log(calculator.value); // 5 because the add and subtract functions are modifying the value property of the calculator object using the this keyword, which refers to the current object.