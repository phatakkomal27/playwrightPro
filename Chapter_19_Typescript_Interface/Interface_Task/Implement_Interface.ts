//Implement interfaces in classes

interface Shape {
    area(): number;
    perimeter(): number;
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}   

let circle1 = new Circle(5);

console.log("Circle Area: " + circle1.area());
console.log("Circle Perimeter: " + circle1.perimeter());    

