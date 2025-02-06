// Write a function checkVotingEligibility that checks if a user can vote: 1. 
// If age >= 18, return "Eligible to Vote". 2. Otherwise, return "Not Eligible"

Example:

function checkVotingEligibility(age) {
   return age>=18?'eligibile to vote':'not eligible'
}

// Test cases
console.log(checkVotingEligibility(20));  // Output: "Eligible to Vote"
console.log(checkVotingEligibility(16)); 