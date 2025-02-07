// Question 5. Subtract Two Numbers
// Write a curried function that takes two numbers and returns their difference. The curried function will first accept one number, and then the second function will accept the second number to subtract from the first.

// Example:

 function subtract(a) {

    return function(b){
        return a-b
    }

}

console.log(subtract(10)(5)); // Output: 5