//Login Brute-Force Detection
/*Write a JavaScript program that simulates a login system with 
brute-force detection. The system should lock the account after
 3 consecutive failed attempts. Use a do...while loop to process 
 login attempts from an array. Demonstrate var (global counter),
  let (loop variables), and const (credentials and threshold). 
  Validate using strict equality (===) and logical operators (&&).*/
const correctUsername = "admin";
const correctPassword = "password123";
const maxAttempts = 3;  
let loginAttempts = [
    { username: "admin", password: "wrongpass" },
    { username: "admin", password: "password13" },
    { username: "admin", password: "password12" },
    { username: "admin", password: "password123" }
];  
let attemptIndex = 0;
let failedAttempts = 0;
let accountLocked = false;
do {
    let attempt = loginAttempts[attemptIndex];
    console.log(`Attempt ${attemptIndex + 1}: Username = ${attempt.username}, Password = ${attempt.password}`);
    if (attempt.username === correctUsername && attempt.password === correctPassword) {
        console.log("Login successful.");
        break;
    } else {
        failedAttempts++;
        console.log("Login failed.");
    }
    attemptIndex++;
} while (attemptIndex < loginAttempts.length-1 && !accountLocked);   
if (failedAttempts >= maxAttempts) {
    accountLocked = true;
    console.log("Account locked due to too many failed attempts.");
}   
    