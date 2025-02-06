// Write a program in javascript where create the function generateSubsets recursively generates all
//  subsets of the input array.It first handles the base case where the array is empty by returning an empty.
// Then it splits the problem by considering subsets both with and without the first element of the array.



// Recursive function to generate all subsets of an array
function generateSubsets(arr) {
    if (arr.length === 0) {
        return [[]];  
// Base case: return empty subset when array is empty
    }

    const firstElement = arr[0];
    const remainingElements = arr.slice(1);

  // Get all subsets of the remaining array
    const subsetsWithoutFirst = generateSubsets(remainingElements);

  // Add the first element to each of the subsets
    const subsetsWithFirst = subsetsWithoutFirst.map(subset => [firstElement, ...subset]);

  // Return the combined subsets: with and without the first element
    return [...subsetsWithoutFirst, ...subsetsWithFirst];
  
}

// Example usage
const subsets = generateSubsets([1, 2, 3]);
console.log(subsets);  
// Output: [ [], [ 3 ], [ 2 ], [ 2, 3 ], [ 1 ], [ 1, 3 ], [ 1, 2 ], [ 1, 2, 3 ] ]