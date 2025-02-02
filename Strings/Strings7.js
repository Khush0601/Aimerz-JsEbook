// Write a program in js where you have given a array products .Which contain the all products 
// in case-insenstive form and another is searchQuery.Write a logic to check is searQuery present in the production array..



function searchProducts(products, searchQuery) {
for(let i=0;i<products.length;i++){
    let arrEl=products[i].toLowerCase()
    if(arrEl===searchQuery.toLowerCase()){
        return true
    }
    else{
        return false
    }
}

}


let products = ["Apple", "banana", "Orange", "grape", "APPLE"];
let searchQuery = "apple";

let searchResult = searchProducts(products, searchQuery);
console.log(searchResult);  // ["Apple", "APPLE"]