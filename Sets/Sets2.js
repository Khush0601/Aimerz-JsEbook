// Write a program to remove a specific element from a Set using the delete() method and return the updated Set.



function removeElement(mySet, element) {
   let deletedItem= mySet.delete(element)
    return mySet

}
const mySet = new Set([1, 2, 3, 4, 5]);
console.log(removeElement(mySet, 3)); // Output: Set(4) {1, 2, 4, 5}