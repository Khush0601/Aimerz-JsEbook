// Write a function sortProducts that sorts an array of product objects either by name (alphabetically)
//  or price (ascending or descending).

Example:

function sortProducts(products, sortBy, order = "asc") {
  return products.sort((a, b) => {
    if (sortBy === "name") {
      
      if (a.name.toLowerCase() < b.name.toLowerCase()) return order === "asc" ? -1 : 1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return order === "asc" ? 1 : -1;
      
    } else if (sortBy === "price") {
      
      return order === "asc" ? a.price - b.price : b.price - a.price;
    }
  });

}

// Example Usage:
const products = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 800 },
  { name: "Hat", price: 300 },
  { name: "Jeans", price: 1000 }
];

// Sort by name (ascending)
console.log(sortProducts(products, "name", "asc"));
// Output: [{name: "Hat", price: 300}, {name: "Jeans", price: 1000}, {name: "Shirt", price: 500}, {name: "Shoes", price: 800}]

// Sort by price (descending)
console.log(sortProducts(products, "price", "desc"));
// Output: [{name: "Jeans", price: 1000}, {name: "Shoes", price: 800}, {name: "Shirt", price: 500}, {name: "Hat", price: 300}]


  
