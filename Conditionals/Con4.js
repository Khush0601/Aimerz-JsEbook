// escription:Write a JavaScript program that checks if a given day is a weekend (i.e., Saturday or Sunday).
//  The program uses the Date object in JavaScript to get the day of the week and checks whether it's Saturday (6) or Sunday (0),
//  which are considered weekend days.

Example:


function isWeekend() {
    let today=new Date().getDay()
    if(today===0 ||today===6){
        console.log('weekends');
    }
    else{
        console.log('working');
    }
   
    
}
// Call the function to check if today is a weekend
isWeekend();