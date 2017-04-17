class BaseClass{
    width:number;
    length:number;
}

class Rectangle extends BaseClass{

    calcSize() : number{
        return this.width * this.length;
    }
}

let rectangle = new Rectangle();

rectangle.width = 5;
rectangle.length = 2;

console.log(rectangle.calcSize());



