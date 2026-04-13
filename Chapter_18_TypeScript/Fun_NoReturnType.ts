// void
function sayHello(msg: string): void {
    console.log(msg);
}

// Function annotations
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// never - function never returns (throws or infinite loop)
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) { }
}

console.log(greet("Alice"));
sayHello("Welcome to TypeScript!"); 
// Uncommenting the following lines will cause the program to throw an error or run indefinitely
// throwError("This is an error!");
// infiniteLoop();  
        