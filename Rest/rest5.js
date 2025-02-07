// Write a function excludeKeys that takes an object and specific keys to exclude, 
// and returns a new object without those keys.

Example:

function excludeKeys(obj, ...keysToExclude) {
    const newObj = { ...obj };
    keysToExclude.forEach(key => delete newObj[key]);
    return newObj;
}

// Example
console.log(excludeKeys({ name: "Mithun sir", age: 30, city: "Bangalore" }, "age", "city"));
// Output: { name: "Mithun sir" }