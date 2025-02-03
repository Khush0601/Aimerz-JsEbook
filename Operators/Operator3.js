// Write a function calculateTip that takes the total bill amount and the tip percentage, and returns the tip amount.

Example:

function calculateTip(billAmount, tipPercentage) {

    const tip = billAmount * (tipPercentage / 100);
    return tip
}

// Example usage:
console.log(calculateTip(200, 15)); // Output: 30
console.log(calculateTip(50, 10));