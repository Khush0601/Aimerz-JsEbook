// Write a function obfuscateEmail that obfuscates an email address for privacy by replacing parts of it with *.

function obfuscateEmail(email) {
    const [local, domain] = email.split("@");
    const obfuscatedLocal = local[0] + "****" + local[local.length - 1];
    return `${obfuscatedLocal}@${domain}`;
}

// Function call example
console.log(obfuscateEmail("Prabir@gmail.com"));