// Write a function convertToBinary that converts a given number into its binary representation as a string.


function convertToBinary(number) {
    return number.toString(2);
}

// Example usage
console.log(convertToBinary(10)); // Output: "1010"
console.log(convertToBinary(255)); // Output: "11111111"
console.log(convertToBinary(0)); // Output: "0"