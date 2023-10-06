// JSON.stringify --------------------------------------------------------------
// -----------------------------------------------------------------------------

/* 

  The method JSON.stringify(student) takes the object and converts it into a string.

  JSON supports following data types:
  - Objects { ... }
  - Arrays [ ... ]
  - Primitives:
    - strings,
    - numbers,
    - boolean values true/false,
    - null.

  JSON is data-only language-independent specification, so some 
  JavaScript-specific object properties are skipped by JSON.stringify.

  Namely:
  - Function properties (methods).
  - Symbolic keys and values.
  - Properties that store undefined.

*/

// basic process ---------------------------------------------------------------

let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,
};

let json = JSON.stringify(student);
console.log(typeof json); // string
console.log("student json:", json);

// data types ------------------------------------------------------------------

console.log("json datatypes:", JSON.stringify(1)); // 1
// a string in JSON is still a string, but double-quoted
console.log("json datatypes:", JSON.stringify("test")); // "test"
console.log("json datatypes:", JSON.stringify(true)); // true
console.log("json datatypes:", JSON.stringify([1, 2, 3])); // [1,2,3]

// ignoring language dependant properties --------------------------------------

let user = {
  sayHi() {
    // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined, // ignored
};

console.log("ignore language specific prop:", JSON.stringify(user)); // {} (empty object)

// nested objects --------------------------------------------------------------

let meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"],
  },
};

console.log("nested objects:", JSON.stringify(meetup));

// avoiding circular reference -------------------------------------------------

let room = {
  number: 23,
};

let meetup2 = {
  title: "Conference",
  participants: ["john", "ann"],
};

meetup2.place = room; // meetup references room
room.occupiedBy = meetup2; // room references meetup

// JSON.stringify(meetup2); // Error: Converting circular structure to JSON

// using replacer --------------------------------------------------------------
/* 
  Most of the time, JSON.stringify is used with the first argument only. But 
  if we need to fine-tune the replacement process, like to filter out circular 
  references, we can use the second argument of JSON.stringify.

  - If we pass an array of properties to it, only these properties will be encoded.
  - We can also use a function instead of an array as the replacer. The function 
  will be called for every (key, value) pair and should return the “replaced” 
  value, which will be used instead of the original one. Or undefined if the 
  value is to be skipped.
*/

let room2 = {
  number: 23,
};

let meetup3 = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room2, // meetup references room
};

room.occupiedBy = meetup3; // room references meetup

console.log(
  "using replacer:",
  JSON.stringify(meetup3, function replacer(key, value) {
    //console.log(`${key}: ${value}`);
    return key == "occupiedBy" ? undefined : value;
  })
);

// fromatting space ------------------------------------------------------------

/* 

  The third argument of JSON.stringify(value, replacer, space) is the number 
  of spaces to use for pretty formatting.

  Previously, all stringified objects had no indents and extra spaces. That’s 
  fine if we want to send an object over a network. The space argument is used 
  exclusively for a nice output.

*/

console.log("formating space:", JSON.stringify(student, null, 2));

// Custom “toJSON” -------------------------------------------------------------

/* 

  Like toString for string conversion, an object may provide method toJSON for 
  to-JSON conversion. JSON.stringify automatically calls it if available.

*/

let room3 = {
  number: 23,
  toJSON() {
    return this.number;
  },
};

let meetup4 = {
  title: "Conference",
  room3,
};

console.log("custom to json:", JSON.stringify(room3)); // 23
console.log("custom to json:", JSON.stringify(meetup4));
console.log();

// JSON.parse ------------------------------------------------------------------
// -----------------------------------------------------------------------------

/* 

  To decode a JSON-string, we need another method named JSON.parse.

  let value = JSON.parse(str, [reviver]);

  - str: JSON-string to parse.
  - reviver: Optional function(key,value) that will be called for each 
  (key, value) pair and can transform the value.

*/

// basic parsing ---------------------------------------------------------------

let userData =
  '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let userDataParsed = JSON.parse(userData);
console.log("parsing json str:", userDataParsed);

// Using reviver ---------------------------------------------------------------

let strMeetup = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetupParsed = JSON.parse(strMeetup);
console.log("date as string:", meetupParsed.date); // String, not date object

meetupParsed = JSON.parse(strMeetup, function (key, value) {
  if (key == "date") return new Date(value);
  return value;
});
console.log("date as date object:", meetupParsed.date.getDate()); // now it is a date object
console.log();

// EXERCISES -------------------------------------------------------------------
// -----------------------------------------------------------------------------

// exercise 1 ------------------------------------------------------------------
// Write replacer function to stringify everything, but remove properties that reference meetup:

let roomEx1 = {
  number: 23,
};

let meetupEx1 = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: roomEx1,
};

// circular references
roomEx1.occupiedBy = meetupEx1;
meetupEx1.self = meetupEx1;

console.log(
  "Exercise 1:",
  JSON.stringify(meetupEx1, function replacer(key, value) {
    return key != "" && value == meetupEx1 ? undefined : value;
  })
);
