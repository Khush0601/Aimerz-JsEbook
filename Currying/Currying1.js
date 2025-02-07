// Write a curried function that accepts two numbers as arguments and returns their sum.
//  The first argument is passed to the curried function, and the second argument is passed to the returned function.

// Example:

 const add = function(a) {
  return function(b) {
      return a+b
  

  };
};

console.log(add(5)(3)); // Output: 8