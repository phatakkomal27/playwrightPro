
class Animal
{
    constructor(name)
    {

    }
    eat()
    {
        console.log(this.name+"is eating");
    }
    sleep()
    {
        console.log(this.name+"is sleeping");
    }
}

class Dog extends Animal
{
    constructor(name, breed)
    {
       // new Animal(name); //calling parent constructor
        super(name); // calling parent constructor
        this.breed = breed;
    }
    bark()
    {
        console.log(this.name+" is barking");
    }
}       

let dog1 = new Dog("Tommy", "Labrador");
dog1.eat();
dog1.sleep();
dog1.bark();
console.log(dog1.breed)