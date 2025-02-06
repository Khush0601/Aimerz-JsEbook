// Description:Write a program in javascript.Where create a variable username, password and role.
// Write a function checkAcess .In this function define the correctUsername, correctPassword, correctRole 
// then compare it with the function parameter.Now, function will decide the wheather the user will get the access or not.


function checkAccess(username, password, role) {
  const correctName='admin'
  const correctPassword='password123'
  const correctRole='admin'

  if(username===correctName && password===correctPassword){
    if (role.toLowerCase() === "admin") {
        console.log("Access granted! Welcome, Admin.");
       console.log("Admin Dashboard: You have full access to all system features.");
         } 

    else if(role.toLowerCase()==='user'){
        console.log("Access granted! Welcome, User.");
        console.log("User Dashboard: You have limited access to the system.");
           } 
    else {
         console.log("Access denied. Invalid role.");
           }
       } 
   else {
   console.log("Access denied. Invalid username or password.");
       }
    
   
  
}
// Example usage:
checkAccess("admin", "password123", "admin");  // Admin access
checkAccess("admin", "password123", "user");   // User access
checkAccess("admin", "wrongpassword", "admin"); // Invalid password
checkAccess("admin", "password123", "guest");  // Invalid role