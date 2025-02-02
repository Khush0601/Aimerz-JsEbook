// Write a program in javascript where create a variable query by assigning some word to the variable and there is another string productDescription and search the query in the productDescription.


function isProductMatch(query, description) {
if(description.toLowerCase().includes(query.toLowerCase())){
    return true
}
else{
    return false
}
}

let queryy = "red shoes ";
let productDescription = "These are red shoes with comfortable padding.";

console.log(isProductMatch(queryy, productDescription))