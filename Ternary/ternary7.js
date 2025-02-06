// Write a function sessionWarning that checks time left for a session (timeLeft):

// If timeLeft <= 0, return "Session Expired".
// If timeLeft <= 5, return "Warning: Session about to expire".
// Otherwise, return "Session Active".


function sessionWarning(timeLeft) {
  return timeLeft<=0?'session expired':timeLeft<=5?'warning':'session active'
}

// Test cases
console.log(sessionWarning(0));   // Output: "Session Expired"
console.log(sessionWarning(3));   // Output: "Warning: Session about to expire"
console.log(sessionWarning(5));   // Output: "Warning: Session about to expire"
console.log(sessionWarning(10));  // Output: "Session Active"
console.log(sessionWarning(-1));  // Output: "Session Expired"