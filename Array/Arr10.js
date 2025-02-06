// Write a function filterByPrice that filters an array of products within a given price range.

Example:

function filterByPrice(products, minPrice, maxPrice) {
  return products.filter((el,i)=>{
    if(el.price>=minPrice && el.price<=maxPrice){
        return true
    }
  })
}

// Example Usage:
const products = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 800 },
  { name: "Hat", price: 300 },
  { name: "Jeans", price: 600 }
];

const minPrice = 300;
const maxPrice = 600;
const filteredProducts = filterByPrice(products, minPrice, maxPrice);
console.log(filteredProducts);
// Output: [ { name: 'Shirt', price: 500 }, { name: 'Hat', price: 300 }, { name: 'Jeans', price: 600 } ]