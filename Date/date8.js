// Description:Write a javascript program where create a two variable date1 date2 and took a two date
//  and then compare it on the basis of comparison print that date1 is earlier to date2 of later to date2 or same to date2.

function compareDates(date1, date2) {
    if (date1 < date2) {
        console.log('date1 is earlier than date2');
      } else if (date1 > date2) {
        console.log('date1 is later than date2');
      } else {
        console.log('Both dates are the same');
      }
}

// Example usage:
let date1 = new Date('2024-12-25');
let date2 = new Date('2024-12-31');

compareDates(date1, date2);  // Compare the two dates