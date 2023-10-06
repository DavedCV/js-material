// function constructors with new keyword

// real function constructor process -------------------------------------------

function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

// Return from constructors ----------------------------------------------------

// - If return is called with an object, then the object is returned instead of this.
// - If return is called with a primitive, it’s ignored.

function BigUser() {
  this.name = "John";
  return { name: "Godzilla" }; // <-- returns this object
}
new BigUser().name; // Godzilla, got that object

function SmallUser() {
  this.name = "John";
  return; // <-- returns this
}
new SmallUser().name; // John

// Examples --------------------------------------------------------------------

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayHi = function () {
    return `Hi my name is ${this.name}`;
  };
}

const player1 = new Player("David", "X");
console.log(player1);
console.log(player1.sayHi());

const player2 = new Player("Liz", "O");
console.log(player2);
console.log(player2.sayHi());

// -----------------------------------------------------------------------------

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      read ? "read" : "not read yet"
    }`;
  };
}

const hobbit = new Book("The Hobbit", "J.R.R Tolkien", 295);
console.log(`Book title: ${hobbit.title}`);
console.log(`Book author: ${hobbit.author}`);
console.log(hobbit.info());
