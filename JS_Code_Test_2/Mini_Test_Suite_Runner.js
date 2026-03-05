//Mini Test Suite Runner
/* Build a mini test suite runner that executes test cases
 and generates a summary report. This question combines ALL 
 topics: var/let/const, if-else, switch, for loop, while loop, 
 do...while, operators (===, !==, &&, ||, ??, ternary), typeof checks,
  and identifiers.
Each test case has a name, expected value, actual value, and comparison 
type (strictEqual, looseEqual, typeCheck, truthy, lessThan). Run all tests,
 track pass/fail/error counts, find consecutive passes from start (while loop), 
 find first failure (do...while), and print a comprehensive report.*/
    
let testCases = [
    { name: "Test Case 1", expected: 5, actual: 5, comparison: "strictEqual" },
    { name: "Test Case 2", expected: "hello", actual: "hello", comparison: "looseEqual" },  
    { name: "Test Case 3", expected: 10, actual: "10", comparison: "typeCheck" },
    { name: "Test Case 4", expected: true, actual: 1, comparison: "truthy" },
    { name: "Test Case 5", expected: 100, actual: 50, comparison: "lessThan" }  
];
let passCount = 0;
let failCount = 0;
let errorCount = 0;
let consecutivePasses = 0;
let firstFailureIndex = -1;
for (let i = 0; i < testCases.length; i++) {
    let testCase = testCases[i];
    let result;
    switch (testCase.comparison) {
        case "strictEqual":
            result = (testCase.expected === testCase.actual);
            break;
        case "looseEqual":
            result = (testCase.expected == testCase.actual);
            break;
        case "typeCheck":
            result = (typeof testCase.expected === typeof testCase.actual);
            break;
        case "truthy":
            result = !!testCase.actual;
            break;
        case "lessThan":
            result = (testCase.actual < testCase.expected);
            break;
        default:
            console.log(`Error: Invalid comparison type for ${testCase.name}`);
            errorCount++;
            continue;
    }
    if (result) {
        passCount++;
        if (firstFailureIndex === -1) {
            consecutivePasses++;
        }
    } else {
        failCount++;
        if (firstFailureIndex === -1) {
            firstFailureIndex = i;
        }
    }   
    console.log(`${testCase.name}: ${result ? "PASS" : "FAIL"}`);
}   
console.log("\nTest Summary Report:");
console.log(`Total Tests: ${testCases.length}`);
console.log(`Passed: ${passCount}`);    
console.log(`Failed: ${failCount}`);
console.log(`Errors: ${errorCount}`);
console.log(`Consecutive Passes from Start: ${consecutivePasses}`);

if (firstFailureIndex !== -1) {
    console.log(`First Failure: ${testCases[firstFailureIndex].name}`);
}



    
