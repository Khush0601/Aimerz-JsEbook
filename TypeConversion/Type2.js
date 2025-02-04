// Write a program in javaScript where take a phone number as a input in variable phoneInput.
//  Write a logic to validate weather the phone number is valid or not.



function validatePhoneNumber(phoneInput) {
 let clean=phoneInput.trim()
 if(clean.length===10){
    console.log('phone no is valid')
 }
 else{
    console.log('phone no is invalid')
 }
}

// Example usage:
let phoneInput = " 555-123-4567 ";
validatePhoneNumber(phoneInput);
