function calculateTime(n) {
    
    let startTime = new Date().getTime();
    
    
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    
    
    let endTime = new Date().getTime();
    
    
    let timeTaken = (endTime - startTime) / 1000;
    
    return timeTaken;
}


console.log('Time taken to calculate sum from 1 to 100:', calculateTime(100));
console.log('Time taken to calculate sum from 1 to 100000:', calculateTime(100000));
console.log('Time taken to calculate sum from 1 to 1000000000:', calculateTime(1000000000));
