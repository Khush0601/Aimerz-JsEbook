// Question 5. Check if a Number is Prime
// Write a function to check if a given number is a prime number.
//  A prime number is a number greater than 1 that has no divisors other than 1 and itself.

// Example:

function isPrime(n) {
  if(n<=1){
    return false
  }
  else{
    for(let i=2;i<=n;i++){
        if(n%i===0){
            return false
        }
        else{
            return true
        }
    }
  }

}

console.log(isPrime(11)); // Output: true