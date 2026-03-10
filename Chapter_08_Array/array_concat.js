//Array concatination
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]   
// Concatenating multiple arrays
let array3 = [7, 8, 9];
let allCombined = array1.concat(array2, array3);
console.log(allCombined); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Concatenating arrays with non-array values
let mixedConcat = array1.concat("hello", [10, 11], { key: "value" });
console.log(mixedConcat); // Output: [1, 2, 3, "hello", 10, 11, { key: "value" }]   
// Original arrays remain unchanged
console.log(array1); // Output: [1, 2, 3]
console.log(array2); // Output: [4, 5, 6]
console.log(array3); // Output: [7, 8, 9]   
// Using concat to create a copy of an array
let arrayCopy = array1.concat();
console.log(arrayCopy); // Output: [1, 2, 3] (a new array that is a copy of array1) 


