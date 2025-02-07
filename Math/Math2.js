// Question 2. Find the Greatest Common Divisor (GCD)
// Write a function to find the GCD of two numbers using the Euclidean algorithm. The GCD is the largest number that divides both the numbers without leaving a remainder.

// Example:

function gcd(a, b) {
  
  if(b===0){
    return a
  }
  else{
    return gcd(b,a%b)
  }

}

console.log(gcd(56, 98)); // Output: 14