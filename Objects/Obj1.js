// Description:Write a program in javascript where define an object userProfile with properties 
// like name, email, age,isAdmin with boolean value and address.
//  The address property itself is an object with street, city,
//  and postalCode,.The object also contains methods like displayProfile to print the user’s profile,
//  and updateEmail to change the users email.

Example:

function createUserProfile(name, email, age, street, city, postalCode, isAdmin) {
    const userProfile = {
        name: name,
        email: email,
        age: age,
        address: {
            street: street,
            city: city,
            postalCode: postalCode
        },
        isAdmin: isAdmin,

        // Method to display user information
        displayProfile: function() {
            console.log("Name:",this.name);
            console.log("Email:",this.email);
            console.log("Age:",this.age);
            console.log("Address:",this.address.street,this.address.city , this.address.postalCode);
            console.log(this.isAdmin ? "Yes" : "No");
        },

        // Method to update email
        updateEmail: function(newEmail) {
            this.email = newEmail;
        }
    };

    return userProfile;
}

// Create a user profile
const user = createUserProfile("Alice", "alice@example.com", 28, "123 Elm Street", "Wonderland", "12345", false);

// Display the user's profile
user.displayProfile();

// Update the user's email
user.updateEmail("newalice@example.com");

// Display the updated profile
user.displayProfile();