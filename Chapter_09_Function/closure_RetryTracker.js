function retryTracker(max)
{
    let attempts = 0;
    function retry()
    {
        if (attempts < max) 
        {
            attempts++;
            console.log(`Attempt ${attempts}: Retrying...`);
        }
        else
        {
            console.log("Max attempts reached. No more retries.");
        }

    }
    return retry;   
}

const retryFunc = retryTracker(3);
retryFunc(); // Output: Attempt 1: Retrying...
retryFunc(); // Output: Attempt 2: Retrying...
retryFunc();
retryFunc(); // Output: Max attempts reached. No more retries.
    