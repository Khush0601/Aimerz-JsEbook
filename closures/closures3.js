// Write a function createDropdownManager to manage the state (open/close) of a dropdown menu


function createDropdownManager() {
    let isOpen = false;

    return {
      toggle: () => isOpen = !isOpen, // Toggle the state
      getState: () => isOpen // Return current state
    };
}

// Usage
const dropdown = createDropdownManager();
console.log(dropdown.getState()); // false
dropdown.toggle();
console.log(dropdown.getState()); // true