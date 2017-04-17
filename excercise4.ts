class Person{
    _firstname: string;

    get firstname(){
        return this._firstname;
    }
    set firstname(fname: string){
        this._firstname = fname;
    }
}

let person = new Person();
person.firstname = "Asaad";
console.log(person.firstname);




