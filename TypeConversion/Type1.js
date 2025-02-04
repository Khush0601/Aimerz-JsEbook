// Write a program in javascript.where User input age as a string in variable ageInput. Write a program to check whether the input age is valid or not.



function validateAge(ageInput) {
   let age=parseInt(ageInput)
   if(age>=18){
 console.log('Age is valid.')
   }
   else{
    console.log('Age must be a number and at least 18.')
   }
}

// Example usage
let ageInput = "nan";  // User input as a string
validateAge(ageInput);