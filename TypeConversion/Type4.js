// Write a program in javaScript where declare a object with variable name, age and 
// write a program to convert it into JSON string and store it in localstorage.



function storeUserData(user) {

 let jsonString=JSON.stringify(user)
 //localstorage is a browser api it will no give output in node.js thats why its giving error

 localStorage.setItem('user',jsonString)
 
 console.log('data saved in localstorage')
}

// Example usage:
let user = { name: "Alice", age: 30 };
storeUserData(user);