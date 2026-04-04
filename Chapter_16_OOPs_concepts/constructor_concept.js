class car
{
    //one class can have only one constructor and it is used to 
    // initialize the object of the class. It is called automatically when
    //  an object is created. It can have parameters or it can be without parameters. It cannot return any value and it cannot be called explicitly.    
    //function vs method vs constructor

    //function : is a block of code that performs a specific task and can
    //  be called from anywhere in the program. It can be defined outside of 
    // a class and can be called without creating an object of the class.

    //method : is a function that is defined inside a class and is associated
    //  with an object of the class. It can be called using the object of the 
    // class and can access the properties of the object.    


   /* constructor()
    {
        console.log("This is a constructor");
    }*/

    constructor(name,model)
    {
        this.name=name;
        this.model=model;
    }
    display()
    {
        console.log("name:"+this.name);
        console.log("model:"+this.model);
    }   
}

let car1=new car("BMW","X5");
car1.display();
let car2=new car("Audi","Q7");
car2.display();

