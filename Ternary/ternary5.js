// Write a function productStatus that takes stock and isDiscontinued. 
// Return: 1. "Discontinued" if isDiscontinued is true. 2. "Out of Stock" if stock is 0. 3. 
// "In Stock" if stock is greater than 0.

Example:

function productStatus(stock, isDiscontinued) {
 return  isDiscontinued?'discontinued':stock>0?'instock':'out of stock'
}

// Test cases
console.log(productStatus(5, false));   // Output: "In Stock"
console.log(productStatus(0, false));   // Output: "Out of Stock"
console.log(productStatus(3, true));    // Output: "Discontinued"
console.log(productStatus(0, true));    // Output: "Discontinued"
console.log(productStatus(10, false));  // Output: "In Stock"