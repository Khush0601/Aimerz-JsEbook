// Write a function calculateDiscountedPrice that takes the original price and the discount percentage, and returns the price after the discount is applied.



function calculateDiscountedPrice(originalPrice, discountPercentage) {

         let discountprice=(originalPrice*discountPercentage)/100
         let price=originalPrice-discountprice
         return price
}

// Example usage:
console.log(calculateDiscountedPrice(100, 20)); // Output: 80
console.log(calculateDiscountedPrice(250, 10))