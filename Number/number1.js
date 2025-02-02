//Write a function to convert a string containing a number (e.g., "123") into an actual number. If it is not a valid number, return NaN.
function convertToNumber(str) {
    let actualNum=Number(str)
    if(Number.isInteger(actualNum)){
     return actualNum
    }
    else{
     return NaN
    }
     
  }
  
  console.log(convertToNumber("123")); 
  console.log(convertToNumber("abcfffff")); 