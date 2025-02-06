function getClothingAdvice(temperature) {
    if (temperature <= 0) {
        console.log("It's freezing cold! Wear a heavy coat, gloves, and a scarf.");
    } else if (temperature > 0 && temperature <= 10) {
        console.log("It's very cold. Wear a warm jacket or sweater.");
    } else if (temperature > 10 && temperature <= 20) {
        console.log("It's a bit chilly. A light jacket or sweater should be enough.");
    } else if (temperature > 20 && temperature <= 30) {
        console.log("It's warm. A t-shirt and shorts should be comfortable.");
    } else {
        console.log("It's hot! Wear light clothes like a tank top or shorts.");
    }
}

// Example usage
let currentTemperature = 18; // Set the current temperature in Celsius
getClothingAdvice(currentTemperature);