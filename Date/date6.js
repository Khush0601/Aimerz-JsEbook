// Question 6:Add Days to a Date
// Description:Write a javascript program where manipulate the current date by adding some extra 
// date and return the updated date from it. Example:

function getFutureDate(daysToAdd) {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + daysToAdd);
    return currentDate;
}

console.log(getFutureDate(5));  // Logs the date 5 days from today