let runTest = new Promise(function (resolve, reject) {
    reject("Test Failed");
});

runTest.then(function (data) {
    console.log("Test Passed!!")
}).catch(function (error) {
    console.log(error)
}).finally(function () {
    console.log("Test Completed!!")
}); 