/*What is an object in JavaScript?
--An object is a collection of related data and/or functionality. The keys (labels) are strings, and the values can be anything: strings, numbers, arrays, or even other functions (called methods).
  const smartphone = {
  brand: "Nokia",
  model: "G42",
  is5G: true
  };
How do you access object properties?
--There are two ways to get data out of an object: Dot Notation and Bracket Notation.
Difference between dot and bracket notation
--Dot Notation is static. You must type the exact name of the property.
  Bracket Notation is dynamic. You can use a variable inside the brackets to decide which property to access at runtime.
  const property = "brand";
  console.log(smartphone.brand);    // "Nokia"
  console.log(smartphone[property]); // "Nokia" (works because property = "brand")
How to add and delete properties?
--Objects are mutable, meaning you can change them after they are created.
  Add/Update: Just assign a value to a new or existing key.
  Delete: Use the delete keyword.
  smartphone.color = "Purple"; 
  smartphone.is5G = false;    
  delete smartphone.model;
How to check if a property exists?
--To avoid "undefined" errors, you can check if a key exists using the in operator or .hasOwnProperty().
  console.log("brand" in smartphone);        // true
  console.log(smartphone.hasOwnProperty("price")); // false  
What is Object.keys()?
--Object.keys(obj): Returns an array of all the keys.
  Result: ["brand", "is5G", "color"]
What is Object.values()?
--Object.values(obj): Returns an array of all the values.
  Result: ["Nokia", false, "Purple"]
What is Object.entries()?
--Object.entries(obj): Returns an array of [key, value] pairs (nested arrays).
  Result: [["brand", "Nokia"], ["is5G", false], ["color", "Purple"]]
How to loop through an object?
--for (let key in smartphone) {
  console.log(`${key}: ${smartphone[key]}`);
  }
  */