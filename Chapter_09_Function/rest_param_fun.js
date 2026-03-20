//rest parameter in function
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5)); // Output: 9
console.log(sum(10, 20, 30, 40)); // Output: 100

function logResults(suitName, ...results) {
    console.log("Suit Name: " + suitName);
    console.log("Results: " + results.join(", "));
}   
logResults("Stage regression", "pass", "pass", "fail","skip","pass");