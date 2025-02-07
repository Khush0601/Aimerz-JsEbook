// Question 3. Calculate the Square Root of a Number
// Write a function that returns the square root of a given number. If the number is negative, return an error message.

// Example:

function squareRoot(n) {
    if(n<0) {
        return 'invalid input'
    }
    else{
        return Math.sqrt(n)
    }
   

}

console.log(squareRoot(25)); // Output: 5