// Write a function filterEvens that takes any number of arguments and returns an array of all even numbers.


function filterEvens(...numbers) {
  return numbers.filter((el)=>el%2===0)
}

// Example
console.log(filterEvens(1, 2, 3, 4, 5, 6)); // Output: [2, 4, 6]