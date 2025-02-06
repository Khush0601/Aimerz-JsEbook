// Description:Write a javascript program where create a Simple Counter which contain the function increase,
//  decrease, and reset for Displays a counter starting at 0. Increases the counter by 1 Decreases the counter by 1
//  Resets the counter back to 0

Example:

// Function to create a counter object
function createCounter() {
    let counter=0
   return {
    increase:()=>{
   counter++
   },
   decrease:()=>{
    counter--
   },
   reset:()=>{
    counter=0
   },
   getCount: ()=> {
    return counter;
}
   }
}

// Create a counter object
const counter = createCounter();

// Example usage
counter.increase();
console.log(counter.getCount()); // 1
counter.decrease();
console.log(counter.getCount()); // 0
counter.reset();
console.log(counter.getCount()); // 0