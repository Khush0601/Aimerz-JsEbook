// Write a function chunkData that takes an array of user data and splits it into smaller chunks.



function chunkData(data, chunkSize) {
    let result=[]
    for (let i = 0; i < data.length; i += chunkSize) {
        result.push(data.slice(i, i + chunkSize));
      }
      return result
}

// Example Usage:
const data = ["User1", "User2", "User3", "User4", "User5"];
const chunkSize = 2;

const chunkedData = chunkData(data, chunkSize);

console.log(chunkedData);
// Output: [["User1", "User2"], ["User3", "User4"], ["User5"]]