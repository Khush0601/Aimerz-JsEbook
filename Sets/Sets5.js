// Write a program to transform a Set into an array for further operations such as sorting or iteration.



function convertSetToArray(mySet) {
  
  return [...mySet]

}
const mySet = new Set([1, 2, 3, 4, 5]);
console.log(convertSetToArray(mySet)); // Output: [1, 2, 3, 4, 5]