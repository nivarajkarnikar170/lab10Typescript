// var  bankAccount: {money: number, deposit: (value:number)=>number}={
//     money: 2000,
//     deposit: function(value: number) : number{
//         return (this.money + value);
//     }
// }
var BankAccount = (function () {
    function BankAccount() {
        this.money = 2000;
    }
    BankAccount.prototype.deposit = function (value) {
        this.money += value;
    };
    return BankAccount;
}());
var myself = (function () {
    function myself(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
        this.bankAccount = new BankAccount();
    }
    return myself;
}());
var my = new myself("Asaad", ["Cooking", "voilin"]);
my.bankAccount.deposit(3000);
console.log(my.bankAccount.money);
