// Write a function calculateTimeDifference that takes two times (in 24-hour format) as strings and returns the difference in hours.



function calculateTimeDifference(time1, time2) {
// see this after
    const [hours1, minutes1] = time1.split(':').map(Number);
    
    const [hours2, minutes2] = time2.split(':').map(Number);
    const totalMinutes1 = hours1 * 60 + minutes1;
    const totalMinutes2 = hours2 * 60 + minutes2;
    const differenceInMinutes = Math.abs(totalMinutes2 - totalMinutes1);
    return (differenceInMinutes / 60).toFixed(2);
  

}

// Example usage:
console.log(calculateTimeDifference("08:30", "17:45")); // Output: 9.25
console.log(calculateTimeDifference("09:00", "14:30"))