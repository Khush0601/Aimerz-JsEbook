// Description:Write a javascript program where convert a Date object to a Unix timestamp
//  (milliseconds since January 1, 1970). Example:

function getCurrentTimestamp() {
  const current =new Date().getTime()
  return current
}

// Example usage:
let timestamp = getCurrentTimestamp();
console.log('Timestamp:', timestamp);  // Logs the timestamp