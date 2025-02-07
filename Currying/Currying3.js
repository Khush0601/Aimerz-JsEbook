// Question 3. Calculate Power
// Write a curried function that calculates the power of a number, where the first argument is the base, and the second is the exponent. This function should return the result of raising the base to the power of the exponent.

// Example:

 function power(a) {
  return function(b){
    return a**b
  }
 

}

console.log(power(2)(3)); // Output: 8