//validateStatusCode

function validateStatusCode(statusCode) {
    if (statusCode >= 200 && statusCode < 300) {
        console.log("Success: " + statusCode);
    } else if (statusCode >= 400 && statusCode < 500) {
        console.log("Client Error: " + statusCode);
    } else if (statusCode >= 500 && statusCode < 600) {
        console.log("Server Error: " + statusCode);
    } else {
        console.log("Unknown Status Code: " + statusCode);
    }   
}

validateStatusCode(200); // Output: Success: 200
validateStatusCode(404); // Output: Client Error: 404
validateStatusCode(500);
// Output: Server Error: 500
validateStatusCode(123); // Output: Unknown Status Code: 123        