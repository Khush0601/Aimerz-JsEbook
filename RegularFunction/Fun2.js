// Write a function checkStock that checks if an item is in stock based on a product’s inventory object.
//  If stock is low, return a warning message.

Example:

function checkStock(inventory, item) {
  if(inventory[item]>0){
   return 'in stock'
  }
  else{
    return 'out '
  }
}

// Function call example
const inventory = { apples: 10, bananas: 0 };
console.log(checkStock(inventory, "apples")); // "In stock"
console.log(checkStock(inventory, "bananas")); // "Out of stock"