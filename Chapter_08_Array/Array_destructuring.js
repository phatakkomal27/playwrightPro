//destructuring array
let [firstColor, secondColor, thirdColor] = ["red", "green", "blue"];;
console.log(firstColor); // Output: red
console.log(secondColor); // Output: green
console.log(thirdColor); // Output: blue    

let [x, y, ...z] = [10, 20, 30,45,56];  
console.log(x); // Output: 10
console.log(y); // Output: 20
console.log(z); // Output: [30, 45, 56] (rest of the elements in the array) 
// Destructuring with default values
let [a = 1, b = 2, c = 3] = [10];
console.log(a); // Output: 10 (assigned from the array)
console.log(b); // Output: 2 (default value used)
console.log(c); // Output: 3 (default value used)   
// Skipping elements during destructuring
let [first, , third] = ["apple", "banana", "orange"];
console.log(first); // Output: apple
console.log(third); // Output: orange (skipped the second element "banana") 
// Destructuring nested arrays
let nestedArray = [1, [2, 3], 4];
let [num1, [num2, num3], num4] = nestedArray;
console.log(num1); // Output: 1
console.log(num2); // Output: 2
console.log(num3); // Output: 3
console.log(num4); // Output: 4 
// Swapping variables using array destructuring
let a1 = 5;
let b1 = 10;
[a1, b1] = [b1, a1];
console.log(a1); // Output: 10
console.log(b1); // Output: 5 (values of a1 and b1 are swapped)
    