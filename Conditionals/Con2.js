// Description:Write a program in javascript.Where take a number form prompt by the user and
//  check that whether the number is positive negative or zero, Example:


function checkNumber(num) {
    if(num>0){
        console.log('positive')
    }
    else if(num<0){
        console.log('negative')
    }
    else{
        console.log('zero')
    }
}
// Call the function to check the number
checkNumber(6);