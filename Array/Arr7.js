// Write a function removeDuplicates that takes an array of emails and removes duplicate values.

function removeDuplicates(emails) {
let unique=[]
let duplicate=[]
emails.forEach((el)=>{
    if(unique.includes(el)){
         duplicate.push(el)
    }
    else{
        unique.push(el)
    }
})
return unique
}

// Example Usage:
const emails = [
  "user1@mail.com",
  "user1@mail.com",
  "user2@mail.com",
  "user3@mail.com",
  "user2@mail.com"
];

const uniqueEmails = removeDuplicates(emails);

console.log(uniqueEmails);
// Output: ["user1@mail.com", "user2@mail.com", "user3@mail.com"]