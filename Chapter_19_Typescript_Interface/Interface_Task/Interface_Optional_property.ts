//Create interfaces with optional properties
interface APIResponse {
    status: number;
    message?: string; // Optional property
    data?: any; // Optional property
}   

let response1: APIResponse = {
    status: 200,
    message: "Success",
    data: { id: 1, name: "John Doe" }
};

let response2: APIResponse = {
    status: 404
};

console.log("Response 1:", response1.status, response1.message, response1.data);
console.log("Response 2:", response2.status, response2.message, response2.data);