// Write a program in javascript where You are given an array called products, which contains objects representing various products.
//  Each product has properties such as id, name, price, and inStock. 
// The goal is to filter the array to keep only those products where inStock is true and the price is less than $100. 
// You need to use an array method, like filter, to achieve this and return a new array containing the products
//  that meet these criteria.



const products = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Phone", price: 499, inStock: false },
  { id: 3, name: "Headphones", price: 50, inStock: true },
  { id: 4, name: "Mouse", price: 20, inStock: true },
  { id: 5, name: "Keyboard", price: 120, inStock: true }
];

// Function to filter products based on inStock and price
function filterProducts(products) {

  return products.filter((el,i)=>{
    if(el.inStock===true && el.price<100){
        return true
    }
  })

}

// Call the function and display the filtered products
const filteredProducts = filterProducts(products);
console.log(filteredProducts);