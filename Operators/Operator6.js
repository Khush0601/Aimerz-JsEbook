// Write a function calculateAnnualSalary that takes the hourly wage and the number of hours worked per week, and returns the annual salary, assuming 52 working weeks in a year.



function calculateAnnualSalary(hourlyWage, hoursPerWeek) {
  
   let weekWage=hourlyWage*hoursPerWeek
   let annualSalary=weekWage*52
   return annualSalary

}

// Example usage:
console.log(calculateAnnualSalary(20, 40)); // Output: 41600
console.log(calculateAnnualSalary(15, 35))