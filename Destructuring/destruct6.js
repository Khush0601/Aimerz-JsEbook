// Write a program to destructure an object directly in a function’s parameters. 
// Create a function that takes an object and extracts its name and age properties for use within the function.

function displayInfo(person) {
  
    console.log("Name: " + person.name + ", Age: " + person.age);

}

displayInfo({ name: "Charlie", age: 35, city: "London" });
// Output: Name: Charlie, Age: 35