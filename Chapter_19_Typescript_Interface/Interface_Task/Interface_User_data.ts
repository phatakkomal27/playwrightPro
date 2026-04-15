//Define interfaces for user data 

interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
    gender: string;
}

let user1: User = {
    id: 1,
    name: "abc",
    email: "abc@example.com",
    isActive: true,
    gender: "Female"
};

let user2: User = {
    id: 2,
    name: "xyz",
    email: "xyz@gmail.com",
    isActive: false,    
    gender: "Male"
};

console.log("User1: " + user1.name + " (" + user1.email + ") - Active: " + user1.isActive);
console.log("User2: " + user2.name + " (" + user2.email + ") - Active: " + user2.isActive); 