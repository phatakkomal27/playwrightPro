//Validate URL contains expected environment
let url = "https://staging.myapp.com/dashboard";

console.log(url.includes("staging"));

console.log(url.startsWith("https"));

console.log(url.endsWith("/dashboard"));

//Extracting status code from log

let log = "[ERROR] 2024-03-07 TestCase: login - Status: 500";

let status = log.match(/Status: (\d+)/)[1]; // Extracts the status code (500) from the log

console.log(status); // Output: 500

// Masking sensitive information
let env = "staging"; 
let module = "auth"; 
let count = 7; 
let testId = `${env}_${module}_${String(count).padStart(3, "0")}`;
console.log(testId); // Output: "staging_auth_007"
//Normalizing test results
let actual = " PASS "; 
let expected = "pass"; 
actual.trim().toLowerCase() === expected;
console.log(actual.trim().toLowerCase() === expected); // Output: true

// Parsing query parameters from URL

let testUrl = "https://app.com/search?query=login&page=2&sort=asc"; 
let params = Object.fromEntries( testUrl.split("?")[1].split("&").map(p => p.split("=")) );
console.log(params); // Output: { query: "login", page: "2", sort: "asc" }

// Masking sensitive information in logs

let token = "Bearer eyJhbGciOiJIUzI1NiJ9.secret"; 
let masked = token.replace(/(?<=Bearer ).+/, "***REDACTED***");
console.log(masked); // Output: "Bearer ***REDACTED***"

