// Write a program in javascript where create array numbers where store the some numbers.
// Then the for loop iterates through each element in the numbers array.
//  In each iteration, the current number (numbers[i]) is added to the sum variable.

Example:

function calculateSum(numbers) {
   let sum=0 
   for(let i=0;i<numbers.length;i++){
     sum+=numbers[i]
   }
   return sum
}

// Calling the function to calculate the sum
let numberss = [5, 10, 15, 20, 25];
console.log(calculateSum(numberss));
