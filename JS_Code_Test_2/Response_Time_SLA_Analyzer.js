//Response Time SLA Analyzer
/* As a performance tester, you collect API response times in milliseconds.
 Write a JavaScript program using a while loop that analyzes an array of 
 response times and prints a performance report with min, max, average, 
 and how many responses breached the SLA threshold (> 500ms).
  Use comparison operators for min/max tracking.*/

  let responseTimes = [450, 600, 300, 700, 200, 550];
    let index = 0;
    let minTime = responseTimes[0];
    let maxTime = responseTimes[0];
    let totalTime = 0;
    let breachCount = 0;
    const slaThreshold = 500;   
    while (index < responseTimes.length) {
        let time = responseTimes[index];
        totalTime += time;
        if (time < minTime) {
            minTime = time;
        }
        if (time > maxTime) {
            maxTime = time;
        }
        if (time > slaThreshold) {
            breachCount++;
        }   
        index++;
    }
    let averageTime = totalTime / responseTimes.length;
    console.log(`Performance Report:`);
    console.log(`Min Response Time: ${minTime} ms`);
    console.log(`Max Response Time: ${maxTime} ms`);
    console.log(`Average Response Time: ${averageTime.toFixed(2)} ms`);
    console.log(`SLA Breaches (> ${slaThreshold} ms): ${breachCount}`);



