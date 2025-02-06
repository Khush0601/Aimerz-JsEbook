// Create a function limitApiRequests that limits how many API requests a user can make in a given
//  timeframe (e.g., 100 requests per hour).



function limitApiRequests(userId, timestamp) {
    const limit = 100; // Maximum requests allowed
    const timeframe = 3600 * 1000; // 1 hour in milliseconds
  
    if (!limitApiRequests.userLogs) {
      limitApiRequests.userLogs = {};
    }
  
    const userLogs = limitApiRequests.userLogs[userId] || [];
    const currentTime = timestamp;
  
    // Filter requests within the timeframe
    const recentRequests = userLogs.filter(
      (time) => currentTime - time <= timeframe
    );
  
    // Update the logs
    recentRequests.push(currentTime);
    limitApiRequests.userLogs[userId] = recentRequests;
  
    // Check if the number of requests exceeds the limit
    return recentRequests.length <= limit;
}

// Function call example
const result = limitApiRequests("user123", Date.now());
console.log(result); // true or false