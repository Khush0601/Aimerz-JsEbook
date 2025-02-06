// Write a function countTags that takes an array of tags and counts how many times each tag appears.



function countTags(tags) {
let count={}

tags.forEach((el)=>{
    if(count[el]){
        count[el]++
    }
    else{
        count[el]=1
    }
})

return count
}

// Example Usage:
const tags = ["css", "html", "css", "js", "html", "js", "js"];

const result = countTags(tags);

console.log(result);
// Output: { css: 2, html: 2, js: 3 }