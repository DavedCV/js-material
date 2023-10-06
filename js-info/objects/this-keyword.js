// 1. function invoction -------------------------------------------------------
// Here this (execution context) is the global object without estrict mode
// using strict mode, this == undefined

function nonStrictFunc() {
  //this == window
  console.log("non strict: " + this);
  //console.log(this == window);
}
//nonStrictFunc();

function strictFunc() {
  "use strict";

  //this == undefined
  console.log("strict: " + this);
  //console.log(this == window);
}
//strictFunc();

// nested functions dont inherits execution context
function wrapper() {
  console.log("outter: " + this.name);

  function inner() {
    console.log("inner: " + this);
  }

  return inner();
}
const specificContext = { name: "specificContext" };
//wrapper.call(specificContext);

// 2. method invocation --------------------------------------------------------
// this is the object that owns the method in a method invocation

const myObject = {
  // helloMethod is a method
  helloMethod: function () {
    return "Hello World!";
  },
};

const ejm = {
  name: "hi i'm 'ejm'",
  showThis: function () {
    console.log(this);
    console.log("this == ejm:", this == ejm);
  },
};
//ejm.showThis();

// even with inheritance
const myDog = Object.create({
  sayName() {
    console.log("this === myDog:", this === myDog); // => true
    return this.name;
  },
});

myDog.name = "Milo";
// method invocation (this is myDog)
//console.log(myDog.sayName()); // => 'Milo'

// 3. Contructor invocation ----------------------------------------------------
// this is the newly created object in a constructor invocation

function Country(name, traveled) {
  this.name = name ? name : "United Kingdom";
  this.traveled = Boolean(traveled); // transform to a boolean
}

Country.prototype.travel = function () {
  this.traveled = true;
};

// Constructor invocation
// this is binded to each new object
const france = new Country("France", false);
const unitedKingdom = new Country();

// Travel to France (method invocation)
france.travel(); 
// console.log(france);

function Foo() {
  console.log(this);
}

// Constructor invocation, this === {}
//const fooInstance = new Foo();

// 5. Indirect invocation ------------------------------------------------------
// this is the first argument of .call() or .apply() in an indirect invocation

const rabbit = { name: "White Rabbit" };

function concatName(string) {
  console.log("this === rabbit:",this === rabbit); // => true
  return string + this.name;
}

// Indirect invocations
// concatName.call(rabbit, 'Hello ');  // => 'Hello White Rabbit'
// concatName.apply(rabbit, ['Bye ']); // => 'Bye White Rabbit'

// 6. arrow functions ----------------------------------------------------------
// this is the enclosing context where the arrow function is defined

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  log() {
    console.log("this == myPoint:", this === myPoint); // => true
    setTimeout(() => {
      console.log("arrow - this == myPoint:", this === myPoint); // => true
      console.log(this.x + ":" + this.y); // => '95:165'
    }, 1000);
  }
}
const myPoint = new Point(95, 165);
//myPoint.log();
