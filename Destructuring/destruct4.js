// Write a program to use default values in destructuring. If the property or element does not exist,
//  assign a default value. Extract a name and gender from the object, with gender defaulting to "Unknown".

function getPersonDetails(person) {
    
  const {name,gender='Unknown'}=person
  return {name,gender}
}

const person = { name: "Bob", age: 30 };
const { name, gender } = getPersonDetails(person);

console.log(name);   // Output: Bob
console.log(gender); // Output: Unknown