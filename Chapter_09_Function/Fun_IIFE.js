//function the dont need to be called are called IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("This is an IIFE!"); // Output: This is an IIFE!
})();   

(function(name) {
    console.log("Hello, " + name + "!"); // Output: Hello, Alice!
})("Alice");    


(() => {
    console.log("This is an IIFE using arrow function!"); // Output: This is an IIFE using arrow function!
})();

((name) => {
    console.log("Hello, " + name + "!"); // Output: Hello, Bob!
})("Bob");


