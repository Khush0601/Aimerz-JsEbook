// Write a program in javascript where create a three variable baseURL, searchQuery, categoryFilter.
//  By using this three variable generate the full URL of website.

Example:

function generateSearchURL(baseURL, searchQuery, categoryFilter) {
   return baseURL.concat(`/${searchQuery}`).concat(`/${categoryFilter}`)
}


let baseURL = "https://www.example.com/search";
let searchQuery = "apple";
let categoryFilter = "electronics";

let fullURL = generateSearchURL(baseURL, searchQuery, categoryFilter);
console.log(fullURL);
