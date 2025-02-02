// Write a javascript program, create a variable count and a function countOccurance. The condition in which the function returns count value is how many time the word appears in the comment.



function countOccurrences(str, word) {
  let count=0;
  let arr=str.split(' ')
 arr.forEach((el)=>{
    if(el.replace('.','')===word){
        count++
    }
 })
 return count
}
const comment = "This product is great. The quality is great and it's a great value.";
const wordToCount = "great";

console.log(countOccurrences(comment,wordToCount))