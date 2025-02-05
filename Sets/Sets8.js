// Write a program to find elements that are in one Set but not in the other.



function differenceOfSets(setA, setB) {
  
   let elNotInOneSet=new Set([...setA].filter((el)=>!setB.has(el)))
   return elNotInOneSet
    
}
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
console.log(differenceOfSets(setA, setB)); // Output: Set(2) {1, 2}