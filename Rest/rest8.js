// Write a function extractItems that takes an array and a number of indices to exclude, and returns the remaining items.

function extractItems(arr, ...indicesToExclude) {
return  arr.filter((el, index) => !indicesToExclude.includes(index));
}

// Example
console.log(extractItems([10, 20, 30, 40, 50], 1, 3));
// Output: [10, 30, 50]