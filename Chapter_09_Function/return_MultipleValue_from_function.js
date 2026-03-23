//return multiple value from function
function getUserInfo() {
    const name = "Alice";
    const age = 30;
    return { name, age }; // Return an object containing both values
}       
const userInfo = getUserInfo();
console.log(userInfo.name); // Output: Alice
console.log(userInfo.age);  // Output: 30   

    