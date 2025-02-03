// Write a function calculateSimpleInterest that takes the principal amount, the annual interest rate, and the time in years, and returns the simple interest.



function calculateSimpleInterest(principal, rate, time) {
 
  let si=(principal*rate*time)/100
  return si

}

// Example usage:
console.log(calculateSimpleInterest(1000, 5, 2)); // Output: 100
console.log(calculateSimpleInterest(500, 3, 4));