//call back function
/*callback function as a "call me when you're done" note. In JavaScript, functions are objects, which means you can pass a function into another function as an argument.
The function that receives the callback will "call it back" once it has finished its task.*/

function greet(name,callback)
{
    console.log("Hello",name);
    callback();
}
function sayGoodBye()
{
  console.log("Goodbye!!");
}

greet("komal",sayGoodBye);
