// Write a programme to check if a city is in the Northern Hemisphere based on its latitude using maps.




const checkHemisphere = (latitude) => {

    if (latitude > 0) {
        return "Northern Hemisphere";
      } else if (latitude < 0) {
        return "Southern Hemisphere";
      } else {
        return "On the Equator";
      }

};

// Example usage
const latitude = 40.730610; // Replace with the latitude of the city
console.log(checkHemisphere(latitude));