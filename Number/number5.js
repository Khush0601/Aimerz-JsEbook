// Write a function calculateTimeRemaining that calculates the remaining time between two timestamps in hours, minutes, and seconds.



function calculateTimeRemaining(startTime, endTime) {
 const start=new Date(startTime)
 const end=new Date(endTime)
 const difference=end-start
 const totalseconds=Math.floor(difference/1000)
 const hours=Math.floor(totalseconds/3600)
 const min=Math.floor((totalseconds%3600)/60)
 const seconds=totalseconds%60
 return {hours,min,seconds}
}

// Example usage
console.log(calculateTimeRemaining("2024-12-18T00:00:00Z", "2024-12-31T23:59:59Z"));
// Output: { hours: 359, minutes: 59, seconds: 59 }

console.log(calculateTimeRemaining("2024-12-18T12:00:00Z", "2024-12-19T14:30:45Z"));
// 