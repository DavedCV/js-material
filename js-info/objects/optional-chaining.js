/*

  The optional chaining ?. is a safe way to access nested object properties, 
  even if an intermediate property doesn’t exist.

  The optional chaining ?. stops the evaluation if the value before ?. is 
  undefined or null and returns undefined.

*/

let userWithAddres = {
  address: {
    street: "life",
  },
};
//userWithAddres.address.street; // All good!

let userWithoutAddress = {};
//userWithAddres.address.street; // Error!

// Obvious solutions ------------------------------------------------------------

let user = {};
user.address ? user.address.street : undefined;
user.address ? (user.address.street ? user.address.street.name : null) : null;
user.address && user.address.street && user.address.street.name; // undefined (no error)

let html = document.querySelector(".elem")
  ? document.querySelector(".elem").innerHTML
  : null;

// Optional chaining -----------------------------------------------------------

user?.address?.street; // undefined (no error)

let userNull = null;
userNull?.address; // undefined
userNull?.address.street; // undefined

let x = 0;
userNull?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++
x; // 0, value not incremented

// Other variants ?.() and ?.[] ------------------------------------------------

// ?.()
let userAdmin = {
  admin() {
    console.log("I am admin");
  },
};
let userGuest = {};

userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing happens (no such method)

// ?.[]
let key = "firstName";
let user1 = {
  firstName: "John",
};
let user2 = null;

user1?.[key]; // John
user2?.[key]; // undefined

// Using with delete -----------------------------------------------------------

delete user?.name; // delete user.name if user exists

