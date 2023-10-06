/* 
  Destructuring assignment -----------------------------------------------------

  The two most used data structures in JavaScript are Object and Array.

  Although, when we pass those to a function, it may need not be an object/array 
  as a whole. It may need individual pieces.

  Destructuring assignment is a special syntax that allows us to “unpack” 
  arrays or objects into a bunch of variables, as sometimes that’s more convenient.
  Destructuring also works great with complex functions that have a lot of 
  parameters, default values, and so on.

*/

// Array destructuring ---------------------------------------------------------
// -----------------------------------------------------------------------------

// we have an array with the name and surname
let arr = ["John", "Smith"];

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

console.log("original arr:", arr); // arr is unaltered
console.log("destructured vars:", firstName); // John
console.log("destructured vars:", surname); // Smith

// Ignore elements using commas ------------------------------------------------

// second element is not needed
let [firstName2, , title] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

console.log("destructured var after ignoring:", title); // Consul

// Works with any iterable on the right-side -----------------------------------

let [a, b, c] = "abc"; // ["a", "b", "c"]
console.log("destructured vars:", a);
console.log("destructured vars:", b);
console.log("destructured vars:", b);

let [one, two, three] = new Set([1, 2, 3]);
console.log("destructured vars:", one);
console.log("destructured vars:", two);
console.log("destructured vars:", three);

// Assign to anything at the left-side -----------------------------------------

let user = {};
[user.name, user.surname] = "John Smith".split(" ");

console.log("destructured prop:", user.name); // John
console.log("destructured prop:", user.surname); // Smith

// looping with .entries()
let user2 = {
  name: "John",
  age: 30,
};

// loop over keys-and-values ---------------------------------------------------
for (let [key, value] of Object.entries(user2)) {
  console.log(`${key}:${value}`); // name:John, then age:30
}

// Swap variables trick --------------------------------------------------------

let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

console.log(`swap: ${guest} ${admin}`); // Pete Jane (successfully swapped!)

/*
  The rest '...' --------------------------------------------------------------
  
  Usually, if the array is longer than the list at the left, the “extra” items 
  are omitted. If we’d like also to gather all that follows – we can add one 
  more parameter that gets “the rest” using three dots "...": The value of rest is 
  the array of the remaining array elements.
*/

let [name1, name2, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

// rest is array of items, starting from the 3rd one
console.log("rest:", rest);
console.log("rest length:", rest.length); // 2

// Default values --------------------------------------------------------------

let [first = "Guest", second = "Anonymous"] = ["Julius"];

console.log("destructuring with default:", first); // Julius (from array)
console.log("destructuring with default:", second); // Anonymous (default used)

console.log();

// Object destructuring --------------------------------------------------------
// -----------------------------------------------------------------------------

let options = {
  title: "Menu",
  width: 100,
  height: 200,
};
let { width, height } = options;

console.log("object destructuring:", width); // 100
console.log("object destructuring:", height); // 200

/* 
If we want to assign a property to a variable with another name, for instance, 
make options.title go into the variable named tit, then we can set the variable 
name using a colon:
*/

// { sourceProperty: targetVariable }
let { title: tit } = options;

console.log("object destructuring:", tit);

// default paraemters ----------------------------------------------------------

let options2 = {
  title: "Menu",
};

let { width2 = 100, height2 = 200, title: title2 } = options;

console.log("default parameters destructuring:", title2); // Menu
console.log("default parameters destructuring:", width2); // 100
console.log("default parameters destructuring:", height2); // 200

//the rest '...' ---------------------------------------------------------------

// title = property named title
// rest = object with the rest of properties
let { title: title3, ...rest2 } = options;

// now title="Menu", rest={height: 200, width: 100}
console.log("object destructuring: ", title3);
console.log("object rest: ", rest2);

// Nested destructuring --------------------------------------------------------

let options3 = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

// destructuring assignment split in multiple lines for clarity
let {
  size: {
    // put size here
    width: w,
    height: h,
  },
  items: [item1, item2], // assign items here
  title: t = "Menu", // not present in the object (default value is used)
} = options3;

console.log("nested destructuring:", t); // Menu
console.log("nested destructuring:", w); // 100
console.log("nested destructuring:", h); // 200
console.log("nested destructuring:", item1); // Cake
console.log("nested destructuring:", item2); // Donut

// Smart function parameters ---------------------------------------------------

// we pass object to function
let options4 = {
  title: "My menu",
  items: ["Item1", "Item2"],
};

// ...and it immediately expands it to variables
function showMenu({
  title = "Untitled",
  width = 200,
  height = 100,
  items = [],
} = {}) {
  // title, items – taken from options,
  // width, height – defaults used
  console.log("destructuring function parameters:");
  console.log(`${title} ${width} ${height}`); // My Menu 200 100
  console.log(items); // Item1, Item2
}

showMenu(options4);


// EXERCISES -------------------------------------------------------------------
// -----------------------------------------------------------------------------

// exercise 1 ------------------------------------------------------------------

let user3 = {
  name: "John",
  years: 30
};

let {name: destName, years: destYears, isAdmin = false} = user3;

console.log("exercise 1:", destName);
console.log("exercise 1:", destYears);
console.log("exercise 1:", isAdmin);

// exercise 2 ------------------------------------------------------------------
//Create the function topSalary(salaries) that returns the name of the top-paid person.

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  if (!salaries) return null;

  let topPaidSalary = 0, topPaidName = null;
  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > topPaidSalary) {
      topPaidName = name;
      topPaidSalary = salary;
    }
  } 

  return topPaidName;
}

console.log("exercise 2:", topSalary(salaries));