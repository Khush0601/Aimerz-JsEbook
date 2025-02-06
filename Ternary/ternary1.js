// Write a function checkPassFail that checks if a student has passed: 1. If marks >= 40, return "Pass". 2. Otherwise, return "Fail".

Example:

function checkPassFail(marks) {
  return  marks>=40?'pass':'fail'
}

// Test cases
console.log(checkPassFail(35));  // Output: "Fail"
console.log(checkPassFail(45));  // Output: "Pass"