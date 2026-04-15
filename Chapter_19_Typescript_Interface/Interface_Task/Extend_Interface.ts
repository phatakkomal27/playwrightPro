//Extend interfaces for inheritance

interface Person {
    name: string;
    age: number;
}   
interface Employee extends Person {
    employeeId: number;
    department: string;
}

let employee1: Employee = {
    name: "Amit",
    age: 30,
    employeeId: 12345,
    department: "HR"
};

console.log("Employee Name: " + employee1.name);
console.log("Employee Age: " + employee1.age);
console.log("Employee ID: " + employee1.employeeId);
console.log("Employee Department: " + employee1.department);

