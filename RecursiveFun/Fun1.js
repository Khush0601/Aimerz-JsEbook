// Write a JavaScript function that shows the menu structure which contain title and url.
// The menu should display:Top-level items like "Home," "About," "Contact," etc.
// Nested submenus under categories like "Services," where each category can have its own submenus
//  (e.g., "Web Development," "App Development").

// Example:

// Function to generate the menu
function generateMenu(menu) {
  
    menu.forEach((item) =>{
        console.log('Title: ' + item.title + ', URL: ' + item.url);
        if (item.submenu) {
          generateMenu(item.submenu);  // Recursive call for submenu items
        }
      });

  
}

// menu array
const menu = [
  { title: "Home", url: "/home" },
  { title: "About", url: "/about" },
  { title: "Services", url: "/services", submenu: [
      { title: "Web Development", url: "/services/web-development" },
      { title: "App Development", url: "/services/app-development", submenu: [
        { title: "iOS", url: "/services/app-development/ios" },
        { title: "Android", url: "/services/app-development/android" }
      ]}
    ]
  },
  { title: "Contact", url: "/contact" }
];

// Generate the menu
generateMenu(menu);