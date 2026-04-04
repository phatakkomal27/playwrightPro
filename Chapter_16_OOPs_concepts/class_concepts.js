class person
{
    defineValues(name1,age1,city1)
    {
        this.name=name1;
        this.age=age1;
        this.city=city1;
    }
    display()
    {
        console.log("name:"+this.name);
        console.log("age:"+this.age);
        console.log("city:"+this.city);
    }
}

let person1=new person();
person1.defineValues("komal",25,"pune");    
person1.display();

let person2=new person();
person2.defineValues("pramod",30,"mumbai");    
person2.display();





