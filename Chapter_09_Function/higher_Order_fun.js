//higher order function

function runLogging(testfn,testName)
{
    console.log("Starting:",testName);
    let result=testfn();
    console.log(`finished:${testName}->${result}`);
    return result;
}

function loginTest()
{
    return "pass";
}

console.log(runLogging(loginTest,"login test"));