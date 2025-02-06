// Write a function isCouponValid that checks if a coupon code is valid or expired based on its expiration date.


function isCouponValid(coupon) {
    const currentDate = new Date();
    const expiryDate = new Date(coupon.expiryDate);
  
    return currentDate <= expiryDate;
}

// Function call example
const coupon = { code: "SAVE50", expiryDate: "2024-12-31" };
console.log(isCouponValid(coupon)); // true or false