function getCounter()
{
    let count = 0; // This variable is enclosed by the returned function
    function increment()
    {
        count++; // Accessing the enclosed variable

        }   
    function decrement()
    {
        count--; // Accessing the enclosed variable         
    }
    function getCount()
    {
        return count; // Accessing the enclosed variable         
    }
    return {
        increment: increment,
        decrement: decrement,
        getCount: getCount
    };      
}

const counter = getCounter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 2
counter.decrement();    
console.log(counter.getCount()); // Output: 1
