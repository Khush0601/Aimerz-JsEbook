// Question 2. Multiply Three Numbers with currying
// Write a curried function that takes three numbers and returns their product.
//  The curried function should handle each number step by step, with the first function accepting the first number,
//  and the second and third functions handling the remaining numbers.

// Example:

 function multiply(a) {
       return function(b){
        return function(c){
            return a*b*c
        }
       }

}

console.log(multiply(2)(3)(4)); // Output: 24