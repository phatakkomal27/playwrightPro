function outer()
{
    let msg="hello";
    function inner()
    {
        console.log(msg);
    }       
    return inner;
}

let innerFunc=outer();
innerFunc(); // Output: hello 
// (closure allows inner function to access outer function's variable)