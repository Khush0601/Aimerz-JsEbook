// Write a function calculateDistance that takes the coordinates of two points in a 2D plane and returns the distance between them.



function calculateDistance(x1, y1, x2, y2) {
    const x = x2 - x1;
    const y = y2 - y1;
    const distance = Math.sqrt(x * x + y * y);
    return distance.toFixed(2);
   

}

// Example usage:
console.log(calculateDistance(3, 4, 7, 1)); // Output: 5.00
console.log(calculateDistance(0, 0, 5, 12))