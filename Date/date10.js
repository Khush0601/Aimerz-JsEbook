// Description:Write a program in javascript where take two variable startDate endDate and store the two 
// date then find dateDiffrence after that find the daysDiffrence and return the difference. Example:

function getDaysDifference(startDate, endDate) {
  const differenceinMilliseconds=endDate-startDate
  const daysDifference=differenceinMilliseconds/(24*1000*3600)
  return daysDifference
}

// Example usage:
let startDate = new Date('2024-01-01');
let endDate = new Date('2024-12-31');

let daysDifference = getDaysDifference(startDate, endDate);
console.log('Days difference:', daysDifference);  // Logs the difference in days