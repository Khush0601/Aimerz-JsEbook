// Write a function calculateCartTotal that takes an array of cart items and returns the total price.



function calculateCartTotal(cart) {
 let sum=0
 for(let i=0;i<cart.length;i++){
    cart[i].price=cart[i].price*cart[i].quantity
    sum=sum+cart[i].price
 }
 return sum
}

// Example Usage:
const cart = [
  { name: "Book", price: 300, quantity: 2 },
  { name: "Pen", price: 50, quantity: 3 },
  { name: "Notebook", price: 200, quantity: 1 }
];

const total = calculateCartTotal(cart);

console.log(total); // Output: 950