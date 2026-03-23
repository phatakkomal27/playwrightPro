//spead function

function hasError(...codes) { 
    return codes.some(code => code >= 400);     
}
console.log(hasError(200, 201, 404)); // Output: true
console.log(hasError(200, 201, 300)); // Output: false

//some function return true if at least one element in the array satisfies the condition, otherwise it returns false.

