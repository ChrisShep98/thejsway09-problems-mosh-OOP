class Account{
    constructor(name){
        this.name = name;
        this.balance = 0;
    }
    credit(amount){
        this.balance += amount; 
    }
    describe(){
        return `owner: ${this.name}, balance: ${this.balance}`
    }
}

let threeAccounts = []
threeAccounts.push(new Account('Sean'));
threeAccounts.push(new Account('Brad'));
threeAccounts.push(new Account('Georges'));

threeAccounts.forEach(account => {
    account.credit(1000);
    console.log(account.describe())
})