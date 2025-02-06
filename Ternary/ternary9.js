// Write a function shippingCost that calculates the shipping fee:

// If cartTotal >= 500, return "Free Shipping".
// If distance <= 10, return 50.
// Otherwise, return 100.
// Example:

function shippingCost(cartTotal, distance) {
   return cartTotal>=500?'free shipping':distance<=10?'50':100
}

// Test cases
console.log(shippingCost(600, 5));   // Output: "Free Shipping"
console.log(shippingCost(300, 8));   // Output: 50
console.log(shippingCost(300, 15));  // Output: 100
console.log(shippingCost(500, 20));  // Output: "Free Shipping"