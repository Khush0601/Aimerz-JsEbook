// Write a function getNavLink that checks a user’s role (role) and returns the appropriate navigation link:

// If role is "admin", return "/admin/dashboard".
// If role is "user", return "/user/home".
// For all others, return "/guest".


function getNavLink(role) {
    return role==='admin'?'admin/dashboard':role==='user'?'/user/home':'/guest'
}

// Test cases
console.log(getNavLink("admin")); // Output: "/admin/dashboard"
console.log(getNavLink("user"));  // Output: "/user/home"
console.log(getNavLink("guest")); // Output: "/guest"
console.log(getNavLink("manager")); // Output: "/guest"
console.log(getNavLink(""));      // Output: "/guest"