// function hoisting  : In JavaScript, function declarations are 
// hoisted to the top of their containing scope. This means that 
// you can call a function before it is defined in the code. 
// However, this only applies to function declarations, not to
//  function expressions.  

console.log(greet("Alice")); // Output: Hello, Alice!
function greet(name) {
    return "Hello, " + name + "!";
}

//Not allowed: function expressions are not hoisted
console.log(greet2("Bob")); // Error: greet2 is not defined
const greet2 = function(name) {
    return "Hello, " + name + "!";
}


