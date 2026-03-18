function getResult(s)
{
    console.log(s>=60?"pass":"fail");
}

getResult(70); // Output: pass
getResult(50); // Output: fail  

//returning values from function
function calculateArea(radius)
{
    return Math.PI * radius * radius;
}   
let area = calculateArea(5);
console.log(area); // Output: 78.53981633974483 

//What does a JavaScript function return
//  if there is no explicit `return` statement?
function greet(name) {
    console.log("Hello, " + name + "!");
}
let result = greet("Alice"); // Output: Hello, Alice!
console.log(result); // Output: undefined (because the function does not return anything)   

console.log("Playwright".length); // Output: 10
console.log("admin,editor,viewer".split(",")); // Output: ["admin", "editor", "viewer"]

console.log(["chromium", "firefox"] .join("|")); // Output: "chromium|firefox" (this will join the array elements with the specified separator)