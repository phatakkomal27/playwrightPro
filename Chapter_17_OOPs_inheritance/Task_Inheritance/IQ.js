class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log(this.name + " barks");
  }
}

let d = new Dog("Rex");
d.speak();
d.bark();

//Exercise 2: super() Calls Parent Constructor

class Vehicle {
  constructor(type) {
    this.type = type;
    console.log("Vehicle: " + type);
  }
}

class Car extends Vehicle {
  constructor(brand) {
    super("Car");
    this.brand = brand;
    console.log("Brand: " + brand);
  }
}

let c = new Car("Tesla");

//Exercise 3: Method Overriding — Complete Replace

class Shape {
  area() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(w, h) {
    super();
    this.w = w;
    this.h = h;
  }

  area() {
    return this.w * this.h;
  }
}

let r = new Rectangle(5, 3);
console.log("Area:", r.area());

//Exercise 4: Method Override with super.method()

class Base {
  greet() {
    return "Hello";
  }
}

class Child extends Base {
  greet() {
    return super.greet() + " World";
  }
}

console.log(new Child().greet());

//Exercise 5: instanceof Check

class Vehicle1 {}
class Car1 extends Vehicle1 {}
class Tesla extends Car1 {}

let t = new Tesla();

console.log(t instanceof Tesla);
console.log(t instanceof Car);
console.log(t instanceof Vehicle);
console.log(t instanceof Object);