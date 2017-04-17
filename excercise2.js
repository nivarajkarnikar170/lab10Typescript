var car = (function () {
    function car(name) {
        this.name = name;
    }
    car.prototype.honk = function () {
        console.log(this.name + " is saying Tooot.");
    };
    car.prototype.accelerate = function (speed) {
        this.acceleration = speed;
    };
    return car;
}());
var mycar = new car("BMW");
mycar.honk();
mycar.accelerate(60);
console.log(mycar.acceleration);
