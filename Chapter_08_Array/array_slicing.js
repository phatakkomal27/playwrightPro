let nums=[];
//slice(start, end) method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
// The original array will not be modified.
nums.push(1,2,3,4,5);   
console.log(nums.slice(0,3)); // Output: [1, 2, 3]
console.log(nums.slice(2)); // Output: [3, 4, 5]
console.log(nums.slice(-2)); // Output: [4, 5]
console.log(nums.slice(1,4)); // Output: [2, 3, 4]
console.log(nums); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)    
// Using slice to create a copy of the entire array
let numsCopy = nums.slice();
console.log(numsCopy); // Output: [1, 2, 3, 4, 5]   
// Using slice to create a copy of the entire array
let numsCopy2 = nums.slice(0);
console.log(numsCopy2); // Output: [1, 2, 3, 4, 5]
// Using slice to create a copy of the entire array
let numsCopy3 = nums.slice(0, nums.length);
console.log(numsCopy3); // Output: [1, 2, 3, 4, 5]  
// Using slice to create a copy of the entire array
let numsCopy4 = nums.slice(-nums.length);
console.log(numsCopy4); // Output: [1, 2, 3, 4, 5]
        