// Write a program in javascript where create An array of objects questions,
//  where each object contains a question (question text) and the points (point value for that question).
// Create a array userAnswers that stores the users answers.Each answer is either "correct" or "incorrect".
// create function calculateQuizScore function .Loops through all the questions and checks the users answer.
// If the answer is correct, it adds the respective points to the total score.
// It also calculates the percentage by dividing the total score by the maximum possible score and multiplying by 100.

Example:

// Array representing items in the shopping cart


// Function to calculate the total price of items in the cart
function calculateTotalPrice(cartItems) {

    let sum=0
    for(let i=0;i<cartItems.length;i++){
       let totalPrice=cartItems[i].price*cartItems[i].quantity
       sum+=totalPrice
       console.log(cartItems[i].name + ": $" + cartItems[i].price + " x " + cartItems[i].quantity + " = $" + sum);
  

 
    }
     // Log the final total price to the console
  console.log("Total Price: $" + sum);

    

}

// Call the function to calculate the total price
let cart = [
    { name: 'Laptop', price: 1000, quantity: 2 },
    { name: 'Phone', price: 500, quantity: 1 },
    { name: 'Headphones', price: 100, quantity: 3 }
  ];
calculateTotalPrice(cart);
