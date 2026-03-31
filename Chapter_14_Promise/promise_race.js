//promise.race()
let apiCall1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("API Call 1 Success!!")
    }, 2000);
});

let apiCall2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("API Call 2 Success!!")
    }, 1000);
});

Promise.race([apiCall1, apiCall2]).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});
// In the above code, we have two API calls with different response times.
// We use Promise.race() to get the result of the first promise that resolves or rejects.
// In this case, apiCall2 will resolve first, so the output will be:
// "API Call 2 Success!!"   
