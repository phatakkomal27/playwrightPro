let arr =[1,2,3,4,5];
// Adding elements to the end of the array
arr.push(6);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]
// Removing the last element from the array
let removedElement = arr.pop();
console.log(removedElement); // Output: 6
console.log(arr); // Output: [1, 2, 3, 4, 5]
// Adding elements to the beginning of the array
arr.unshift(0);
console.log(arr); // Output: [0, 1, 2, 3, 4, 5] 
// Removing the first element from the array
let removedFirstElement = arr.shift();
console.log(removedFirstElement); // Output: 0
console.log(arr); // Output: [1, 2, 3, 4, 5]
// Adding elements at a specific index
arr.splice(3,1); // Removes 1 element at index 3
console.log(arr); // Output: [1, 2, 3, 5]   
arr.splice(2, 0, 10); // Adds 10 at index 2 replacing element at index 2
console.log(arr); // Output: [1, 2, 10, 3, 5]
console.log("------------------------------");
const steps = ["open", "fill"];
 const alias = steps; 
 steps.push("submit");
  console.log(alias.length);

