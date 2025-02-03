// Write a function calculateAverageSpeed that takes the total distance traveled and the total time taken, and returns the average speed.



function calculateAverageSpeed(totalDistance, totalTime) {
  
   let avg=totalDistance/totalTime
   return avg.toFixed(2)

}

// Example usage:
console.log(calculateAverageSpeed(150, 3)); // Output: 50.00
console.log(calculateAverageSpeed(100, 2))