var Person = (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (fname) {
            this._firstname = fname;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
person.firstname = "Asaad";
console.log(person.firstname);
