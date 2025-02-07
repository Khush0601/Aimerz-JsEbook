// Write a curried function that calculates the final price of a product after applying a 
// discount and then adding tax. The first function will accept the original price of the product,
//  the second function will accept the discount rate, and the third function will accept the tax rate. 
// The function should return the final price after applying the discount and tax.


 function calculateFinalPrice(price) {
    return function(discountRate){
        return function(taxrate){
            const discountPrice=price*(discountRate/100)
            const totalPrice=price-discountPrice
            
            const finalPrice=totalPrice*(1+taxrate/100)
            
            return finalPrice

        }
    }
   

}

console.log(calculateFinalPrice(1000)(20)(15)); // Output: 920