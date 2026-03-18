/*Exercise 1 : API Response Validation
You receive an array of API response codes. Write code to:
Check if ALL responses are successful (200–299)
Find the FIRST non-success code
Return all unique error codes*/

let responses = [200, 204,305, 404, 500, 404, 200, 503];

let allSuccessful= responses.every(code=> code >=200 && code <300);
console.log("All responces are succeessful:",allSuccessful);

let firstNonSuccessResponceCode = responses.find(code => code < 200 || code >= 300);
console.log("First non-success responce code:", firstNonSuccessResponceCode);

let uniqueErrorCodes = [...new Set(responses)];
console.log("Unique error codes:", uniqueErrorCodes);

console.log("----------------------------------");
//What is wrong with this code? Fix it.
let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort();
console.log("Fastest:", sorted[0]);
//fix
let sortedFixed = responseTimes.sort((a, b) => a - b);
console.log("Fastest (fixed):", sortedFixed[0]);

console.log("----------------------");
//What is the output and why? How would you fix it?
//shallow copy
/*let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
suite2[0].status = "fail";
console.log(suite1[0].status);*/
//deep copy
let suite1 = [{ name: "login", status: "pass" }];
let suite2 =[suite1];
suite2[0].status = "fail";
console.log(suite1[0].status);
