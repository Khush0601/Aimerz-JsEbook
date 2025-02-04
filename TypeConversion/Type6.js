// Create an array of user objects, each containing name (string) age (number)email (string) Iterate through the array
//  and display the user information in a formatted manner.



// List of users
const users = [
 { name: "John Doe", age: 30,email: "john.doe@example.com" },
{ name: "Jane Smith", age: 25,email: "jane.smith@example.com" },
 { name: "Alice Johnson", age: 35,email: "alice.johnson@example.com" },
{ name: "Bob Brown", age: 40, email: "bob.brown@example.com" }
];

// Function to display users
function displayUsers(users) {
 let iterate=users.forEach((el)=>{
    console.log(el)
 })
  };
// Call the function to display users
displayUsers(users);

  