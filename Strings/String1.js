// Write a javascript program, create a variable password and a function checkIfPasswordIsValid. The condition in which the function returns true is when the length of password is minimum 8 characters.





const password = 'abcdttttt';

function isValidPassword(password){
	if(password.length>=8){
     console.log(true) 
    }
    else{
       console.log(false)
    }
}

isValidPassword(password)