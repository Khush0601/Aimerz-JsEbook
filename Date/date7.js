// Description:Write a javascript program where manipulate the current date by subtracting some date
//  and return the updated date from it. Example:

function subtractDaysFromCurrentDate(daysToSubtract) {
 const current=new Date()
 current.setDate(current.getDate()-daysToSubtract)
 return current
}


let updatedDate = subtractDaysFromCurrentDate(10);  // Subtract 10 days from the current date
console.log(updatedDate);  // Logs the updated date