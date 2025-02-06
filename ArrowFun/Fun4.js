// Write a program using an arrow function to filter odd numbers from an array.



const filterOdds = (arr) => {

    return arr.filter((el)=>el%2!==0)
 
  
}
console.log(filterOdds([1, 2, 3, 4, 5])); // Output: [1, 3, 5]