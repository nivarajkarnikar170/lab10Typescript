
class car{ 
    acceleration: number;  
    constructor(public name: string ){ }   
    honk(){
        console.log(`${this.name} is saying Tooot.`);
    }
    accelerate(speed: number){
        this.acceleration = speed;
    }
}

let mycar = new car("BMW");
mycar.honk();
mycar.accelerate(60);
console.log(mycar.acceleration);




