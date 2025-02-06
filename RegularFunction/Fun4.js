// Write a function obfuscateEmail that obfuscates an email address for privacy by replacing parts of it with *.

// function obfuscateEmail(email) {
//     const [local, domain] = email.split("@");
    
//     const obfuscatedLocal = local[0] + "****" + local[local.length - 1];
//     return `${obfuscatedLocal}@${domain}`;
// }

// // Function call example
// console.log(obfuscateEmail("Prabir@gmail.com"));

function phone(no){
   
let a=String(no)

let convertingDigits=a.slice(0,6)



let result=a.replace(convertingDigits,'******')
return result
}
console.log(phone(2345678967))