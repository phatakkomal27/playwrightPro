let fruits= ["banana", "apple", "grape", "orange"];
fruits.sort();
console.log(fruits); // Output: ["apple", "banana", "grape", "orange"]
// Sorting numbers in ascending order and string in alphabetical order
let num=[10,15,5,20];
num.sort();
console.log(num); // Output: [10, 15, 20, 5] (Incorrect sorting due to string comparison)
// To sort numbers correctly, we can provide a compare function
num.sort((a, b) => a - b);
console.log(num); // Output: [5, 10, 15, 20] (Correct sorting in ascending order)       
num.sort((a, b) => b - a);  
console.log(num); // Output: [20, 15, 10, 5] (Sorting in descending order)  
let mixedArray = ["banana", 10, "apple", 5];
mixedArray.sort();
console.log(mixedArray); // Output: [10, 5, "apple", "banana"] (Numbers are sorted before strings)  
mixedArray.sort((a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a - b; // Sort numbers in ascending order
    } else if (typeof a === "string" && typeof b === "string") {
        return a.localeCompare(b); // Sort strings in alphabetical order
    } else if (typeof a === "number") {
        return -1; // Numbers come before strings
    } else {
        return 1; // Strings come after numbers
    }   });
console.log(mixedArray); // Output: [5, 10, "apple", "banana"] (Numbers sorted before strings, and strings sorted alphabetically)   

        
