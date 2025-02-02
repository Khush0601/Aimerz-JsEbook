// Write a javascript program. Where create a variable email and assign the some email address in it.Then create a variable domain. After that check the email contain the domain.
// If it finds the domain within the email, it returns the position where domain starts. If not, it returns -1.



function checkGmailDomain(email, domain) {
    const position = email.indexOf(domain);
    console.log(position) 
}

const email = "user@gmai.com"; 
const domain = "@gmail.com";

checkGmailDomain(email, domain);