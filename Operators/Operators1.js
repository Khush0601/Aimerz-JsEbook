// Write a function calculateTotalPrice that takes the price of an item and the tax rate, and returns the total price after tax.



function calculateTotalPrice(price, taxRate) {
 let totalTax=price*taxRate;
 let totalPrice= totalTax+price
 return totalPrice
}

// Example usage:
console.log(calculateTotalPrice(100, 0.05)); // Output: 105
console.log(calculateTotalPrice(50, 0.1));   // Output: 55