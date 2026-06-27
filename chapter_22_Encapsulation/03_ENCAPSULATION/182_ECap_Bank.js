class SBI {
    #balance; //# means private in JS, In Typescript - private keyword will be used
    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;

    }
    getBalance() {
        return this.#balance;
    }
    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;

        }
        else {
            console.log("Not allowed");
        }
    }

}

let lavanya = new SBI("lavanya", 2000);
console.log(lavanya.getBalance());
lavanya.setBalance("150000", false);
console.log(lavanya.getBalance());

let lavanya_father = new SBI("Lava", 4000);
console.log(lavanya_father.name);
console.log(lavanya_father.getBalance());
lavanya_father.setBalance(300000, true);
console.log(lavanya_father.getBalance());



