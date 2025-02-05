// Write a program to combine two Sets into one, containing all unique elements from both Sets.



  function unionOfSets(setA, setB) {
    
  return new Set([...setA,...setB])

  }
  const setA = new Set([1, 2, 3]);
  const setB = new Set([3, 4, 5]);
  console.log(unionOfSets(setA, setB)); // Output: Set(5) {1, 2, 3, 4, 5}