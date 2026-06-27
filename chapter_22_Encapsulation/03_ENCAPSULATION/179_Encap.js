class BankAccount {

    #bankBalance = 0; //Private
    deposit(amount) {
        if (amount >= 0) {
            this.#bankBalance += amount;
        }
    }
    getBalance() {
        return this.#bankBalance;
    }

}

const account = new BankAccount();
account.deposit(200);
account.getBalance();
console.log(account.getBalance());