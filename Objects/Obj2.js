// Description:Write a program in javascript where define function createShoppingCart where define
//  an shoppingCart object with array of object which contain different item as a object with properties
//  like name, price, quantity.Write a function addItem to add new items (with name, price, and quantity) to the cart.
// The program contain function calculateTotal which calculates the total price based on the quantity and price of the 
// items in the cart.Once you add an item to the cart, it automatically recalculates the total.

Example:

// Function to create a shopping cart object
function createShoppingCart() {
    const shoppingCart = {
        // An array of objects representing items in the cart
        items: [
            { name: "T-shirt", price: 25, quantity: 2 }, // Item 1
            { name: "Jeans", price: 40, quantity: 1 }    // Item 2
        ],

        
        addItem: function(item) {
            this.items.push(item);  
        },

       
        calculateTotal: function() {
            
            return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
        }
    };

    return shoppingCart;

};




// Function to add a new item
function addNewItemToCart(cart, name, price, quantity) {
    const newItem = { name, price, quantity };
    cart.addItem(newItem);  // Add the new item to the cart
}

// Create a shopping cart instance
const myCart = createShoppingCart();

// Display initial total price of the cart
console.log(`Initial Total: $${myCart.calculateTotal()}`);

// Add a new item to the cart
addNewItemToCart(myCart, "Sneakers", 60, 1);

// Display updated total price of the cart
console.log(`Updated Total: $${myCart.calculateTotal()}`);
shoppingCart.addItem({ name: "Sneakers", price: 60, quantity: 1 });

// Updated total price after adding the new item
console.log(`Updated Total: $${shoppingCart.calculateTotal()}`);