// Description:Write a javascript program where print the year date and month using the different function of date object.

function logCurrentDateInfo() {
   let current=new Date()
   console.log(current.getFullYear())
   console.log(current.getDate())
   console.log(current.getMonth())

}

logCurrentDateInfo();  // Calling the function