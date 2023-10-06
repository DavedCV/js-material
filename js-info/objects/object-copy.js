// Copy by reference -----------------------------------------------------------

let user = { name: "John" };
let admin = user;

admin.name = "Pete"; // changed by the "admin" reference
user.name; // 'Pete', changes are seen from the "user" reference

// Comparison by reference -----------------------------------------------------

let a = {};
let b = a;

a == b; // true, both variables reference the same object
a === b; // true

let a2 = {};
let b2 = {};

a == b; // false

// Cloning and merging objects -------------------------------------------------

// merging
let user2 = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user2, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
user.name; // John
user.canView; // true
user.canEdit; // true

// overwritting
let user3 = { name: "John" };
Object.assign(user3, { name: "Pete" });
alert(user.name); // now user = { name: "Pete" }

// cloning
let user4 = {
  name: "John",
  age: 30,
};

let clone = Object.assign({}, user4);
clone.name;   // John
clone.age;    // 30

// Deep cloning ----------------------------------------------------------------

let user5 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone2 = structuredClone(user5);

user.sizes === clone2.sizes;  // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;        // change a property from one place
clone2.sizes.width;           // 50, not related


// supports circular references
let user = {};
// let's create a circular reference:
// user.me references the user itself
user.me = user;

let clone3 = structuredClone(user);
alert(clone3.me === clone3); // true