// var  bankAccount: {money: number, deposit: (value:number)=>number}={
//     money: 2000,
//     deposit: function(value: number) : number{
//         return (this.money + value);
//     }
// }

class BankAccount{
    money : number = 2000;
    deposit(value: number){
         this.money += value;
    }
}

class myself{
    bankAccount : BankAccount;
    constructor(public name: string, public hobbies: string[]){
        this.bankAccount = new BankAccount();
    }    
}

let my = new myself("Asaad",["Cooking","voilin"]);
my.bankAccount.deposit(3000);
console.log(my.bankAccount.money);





