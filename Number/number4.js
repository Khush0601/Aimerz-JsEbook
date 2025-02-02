// Question 4: Optimizing Price Calculation with Bulk Discount
// Write a function calculateBulkDiscount that calculates the total cost for bulk orders, applying a discount when the quantity exceeds a threshold.



function calculateBulkDiscount(price, quantity, discountThreshold, discountRate) {
    if (quantity > discountThreshold) {
        // Apply the discount rate to the price
        const discountedPrice = price * (1 - discountRate / 100);
        // Calculate the total cost with the discounted price
        return discountedPrice * quantity;
    } else {
        // No discount applied; calculate the total cost with the original price
        return price * quantity;
    }
}

// Example usage
console.log(calculateBulkDiscount(50, 15, 10, 10)); // Output: 675
console.log(calculateBulkDiscount(50, 5, 10, 10));  // Output: 250
console.log(calculateBulkDiscount(100, 20, 15, 20)); // Output: 1600