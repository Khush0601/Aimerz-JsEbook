// Write a function groupByClass that takes a teacher's name and an arbitrary number of student
//  names and returns an object grouping them.


function groupByClass(teacher, ...students) {
 return {teacher,students}
}

// Example
console.log(groupByClass("Mithun sir", "Chandra", "Deepak", "Pinkee"));
// Output: { teacher: "Mithun sir", students: ["Chandra", "Deepak", "Pinkee"] }