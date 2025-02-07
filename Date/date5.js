// Description:Write a javascript program where print the day of week according to date.
// For this firstly find the day then return the day of week from that. Example:

function logDayOfWeek() {
   const date=new Date()
   const dayOfWeek=date.getDay()
   console.log(dayOfWeek)

}

logDayOfWeek();  // Calling the function