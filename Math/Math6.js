// Question 6. Find the Least Common Multiple (LCM)
// Write a function to calculate the LCM of two numbers. The LCM is the smallest positive integer that is divisible by both numbers.

// Example:

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b); // Helper function to calculate GCD
}

function lcm(a, b) {
   
    return (a * b) / gcd(a, b);

  }

console.log(lcm(4, 5)); // Output: 20