class Person {

    static nationality = "India";
    constructor(name) {
        this.name = name;
    }
    static common_fn() {
        console.log("I'm a comman function")
    }
}

let s1 = new Person("Lavan");
console.log(s1.name);
console.log(Person.nationality);
Person.common_fn();