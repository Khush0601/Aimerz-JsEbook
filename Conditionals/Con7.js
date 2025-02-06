function checkOutdoorActivity(temperature) {
    if (temperature <= 0) {
        console.log("It's freezing! Stay indoors and stay warm.");
    } else if (temperature > 0 && temperature <= 10) {
        console.log("It's cold outside. Wear a warm jacket and go for a walk!");
    } else if (temperature > 10 && temperature <= 20) {
        console.log("It's a bit chilly. Perfect weather for a run or walk.");
    } else if (temperature > 20 && temperature <= 30) {
        console.log("It's warm outside! Ideal for outdoor activities like jogging, hiking, or cycling.");
    } else {
        console.log("It's hot! Stay hydrated, and it's best to avoid outdoor activities.");
    }
}

// Example usage
let currentTemperature = 15; // Set the current temperature in Celsius
checkOutdoorActivity(currentTemperature);