//scope in function
let a = 10; // global scope

function myFunction() { 
    let b = 20; // local scope
    console.log(a); // Output: 10 (can access global variable)
    console.log(b); // Output: 20 (can access local variable)
}

myFunction();
console.log(a); // Output: 10 (can access global variable)
// console.log(b); // Uncaught ReferenceError: b is not defined (cannot access local variable)  

function outerFunction() {
    let outerVar = "I am outside!"; // outer function scope
    function innerFunction() {
        let innerVar = "I am inside!"; // inner function scope
        console.log(outerVar); // Output: I am outside! (can access outer function variable)
        console.log(innerVar); // Output: I am inside! (can access inner function variable)
    }   
    innerFunction();
    // console.log(innerVar); // Uncaught ReferenceError: innerVar is not defined (cannot access inner function variable)
}   
