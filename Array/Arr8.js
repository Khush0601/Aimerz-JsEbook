// Write a function mostSearched that takes an array of search terms and returns the most frequently searched product.


function mostSearched(searches) {
let obj={}

searches.forEach((el)=>{
    if(obj[el]){
        obj[el]++
    }
    else{
        obj[el]=1
    }
})
let maxCount=0
let mostFrequent=''
for(let keys in obj ){
 if(obj[keys]>maxCount){
    maxCount=obj[keys];
    mostFrequent=keys
 }
}
return mostFrequent
}

// Example Usage:
const searches = ["Phone", "Laptop", "Phone", "Phone", "Tablet", "Laptop"];

const result = mostSearched(searches);

console.log(result); // Output: "Phone"