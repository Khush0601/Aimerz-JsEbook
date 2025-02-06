// Write a function passwordStrength that checks the strength of a password :

// If length >= 12, return "Strong".
// If length >= 8, return "Moderate". 3 .Otherwise, return "Weak".
// Example:

function passwordStrength(password) {    // Check the length of the password and return the strength
  return password.length>=12?'Strong':password.length>=8?'moderate':'weak'
}
// Test cases
console.log(passwordStrength("myp@ssword123")); // Output: "Strong"
console.log(passwordStrength("myp@ss1"));       // Output: "Weak"
console.log(passwordStrength("myp@ssword"));    // Output: "Moderate"
