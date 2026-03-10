// shallow copying
let a = [1, 2, 3];
let b= [...a]; // Using spread operator to create a shallow copy of the array
console.log(b); // Output: [1, 2, 3] (a new array that is a copy of a)
console.log(Array.from(a)); // Output: [1, 2, 3] (a new array that is a copy of a)
console.log(a.slice()); // Output: [1, 2, 3] (a new array that is a copy of a)  
console.log(a.concat()); // Output: [1, 2, 3] (a new array that is a copy of a) 

//deep copying
a.push(99);
console.log(a); // Output: [1, 2, 3, 99]
console.log(b); // Output: [1, 2, 3] (b remains unchanged)

