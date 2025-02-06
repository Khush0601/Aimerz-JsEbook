// Create a function recommendProducts that recommends products to a user based on their browsing
//  history (an array of product categories they viewed).



function recommendProducts(browsingHistory) {
    const recommendations = {
        electronics: ["smartphone", "laptop"],
        "home-appliances": ["microwave", "vacuum cleaner"],
      };
    
      const products = [];
      for (const category of browsingHistory) {
        if (recommendations[category]) {
          products.push(...recommendations[category]);
        }
      }
    
      return products;
}

// Function call example
console.log(recommendProducts(["electronics", "home-appliances"])); 
// ["smartphone", "laptop", "microwave", "vacuum cleaner"]