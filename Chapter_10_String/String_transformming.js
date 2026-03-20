let s = "Hello World";
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.trim());
console.log(s.trimStart());
console.log(s.trimEnd());
console.log(s.replace("World", "JavaScript"));
console.log(s.replaceAll("o", "0"));
console.log(s.split(" "));
console.log(s.startsWith("Hello"));
console.log(s.endsWith("World"));
//concatenation
let s1 = "Hello";
let s2 = "World";
console.log(s1 + " " + s2);
console.log(`${s1} ${s2}`);
console.log("hello".concat(" ", "world"));
//spliting
let s3 = "apple,banana,orange";
console.log(s3.split(","));

let url = "https://app.playwright.dev/docs/intro";
console.log(url.replace("/app/g","qa"));

console.log(Number("42"));
console.log(parseInt("42"));
console.log(parseFloat("3.14"));    

//template literals
let name = "John";
console.log(name.split("").reverse().join(""));

