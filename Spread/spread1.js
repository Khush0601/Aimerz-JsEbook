// Write a program to merge two arrays into one using the spread operator.
//  The spread operator should be used to combine both arrays without modifying the original arrays.

// Example:

function mergeArrays(arr1, arr2) {
  
  return [...arr1,...arr2]

}
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); 
// Output: [1, 2, 3, 4, 5, 6]