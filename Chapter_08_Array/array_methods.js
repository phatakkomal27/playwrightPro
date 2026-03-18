let a=[1,2,3];
a.includes(2); // Output: true
a.includes(4); // Output: false
a.includes(2, 2); // Output: false
console.log(["pass", "fail"].indexOf("skip")); // Output: -1
a.map(x => x * 2); // Output: [2, 4, 6]
//Which method should you use to keep only failed test results from an array?
let results = ["pass", "fail", "pass", "fail"];
let failedResults = results.filter(result => result === "fail");
console.log(failedResults); // Output: ["fail", "fail"]
//What does `find()` return when no element matches?

let numbers = [1, 2, 3, 4, 5];
let result = numbers.find(num => num > 5);
console.log(result); // Output: undefined 

//some() method returns true if at least one element in the array satisfies the provided testing function, otherwise it returns false.
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Output: true   

//
console.log(["10", "2", "1"].sort()); // Output: ["1", "10", "2"] (lexicographical order)
//Which function form is hoisted with its implementation?
function hoistedFunction() {
    console.log("This function is hoisted with its implementation.");
}   

//What happens if you call a function expression stored in `const`
//  before the line where it is defined?
try {
    console.log(nonHoistedFunction()); // This will throw a ReferenceError
} catch (error) {
    console.log(error.message); // Output: Cannot access 'nonHoistedFunction' before initialization
}           
console.log("locator".slice(0, 4));
console.log("fail fail".replace("fail", "pass"));


