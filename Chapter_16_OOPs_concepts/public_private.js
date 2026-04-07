// Private Fields (#) — Hidden Data
// PUBIC Fields 
class Credentials {
    #apiKey;

    constructor(user, key) {
        this.user = user; // public
        this.#apiKey = key;
    }
    getAuthHeader() {
        return "Bearer " + this.#apiKey;
    }
}

let cred = new Credentials("admin", "#scret_key_1234");
console.log(cred.user);
// console.log(cred.apiKey); undefined
// console.log(cred.#apiKey); //error

console.log(cred.getAuthHeader());