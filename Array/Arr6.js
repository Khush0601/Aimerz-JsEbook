// Write a function getCommonItems that takes two arrays of wishlist items and returns the common items.



function getCommonItems(wishlist1, wishlist2) {
    let newArr=[]
  for(let i=0;i<wishlist1.length;i++){
    for(let j=0;j<wishlist2.length;j++){
        if(wishlist1[i]===wishlist2[j])
            newArr.push(wishlist1[i])
    }
  }
  return newArr
}

// Example Usage:
const wishlist1 = ["Shirt", "Shoes", "Hat"];
const wishlist2 = ["Shoes", "Hat", "Watch"];

const commonItems = getCommonItems(wishlist1, wishlist2);

console.log(commonItems);
// Output: ["Shoes", "Hat"]