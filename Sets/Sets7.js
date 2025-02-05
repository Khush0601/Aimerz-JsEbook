// Write a program to identify elements that are common to both Sets using the filter() and has() methods.



function intersectionOfSets(setA, setB) {
 
   let commonEl=new Set([...setA].filter((el)=>setB.has(el)))
   return commonEl
}
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
console.log(intersectionOfSets(setA, setB)); // Output: Set(1) {3}