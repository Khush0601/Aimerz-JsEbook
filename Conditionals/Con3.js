// Description:Write a program in javascript where create a bool type 
// variable isLogin and assign the value for it then create a function checkLoginStatus
//  to check that whether the user is login or not.

Example:

// Create a boolean variable 'isLogin' and assign a value to it


function checkLoginStatus(isLoginn) {
    if(isLoginn){
        console.log('user login')
    }
    else{
        console.log('false');
        
    }
}
// Call the function to check the login status
checkLoginStatus(true);