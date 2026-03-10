//Array checking
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
console.log(array1 === array2); // Output: false (different references)
console.log(Array.isArray(array1)); // Output: true
console.log(Array.isArray({})); // Output: false
console.log(Array.isArray("hello")); // Output: false
console.log(Array.isArray(new Array())); // Output: true

//every and some

let numbers = [2, 4, 6, 8];
let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // Output: true
let no=[87,85,40].some(num => num >= 70);
console.log(no); // Output: true