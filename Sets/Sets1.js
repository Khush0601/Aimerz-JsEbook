// Write a program to create a Set from an array to store only unique elements.
//  This demonstrates how duplicates are automatically removed by the Set.



function addUniqueElements(arr) {
      
    const newSet=new Set(arr)
    return newSet

}
console.log(addUniqueElements([1, 2, 2, 3, 4, 4, 5])); 
// Output: Set(5) {1, 2, 3, 4, 5}