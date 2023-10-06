// Add methods by reference ----------------------------------------------------

let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  console.log("Hello!");
};

user.sayHi(); // Hello!

// Method shorthand ------------------------------------------------------------

// these objects do the same

ms = {
  sayHi: function() {
    alert("Hello");
  }
};

// method shorthand 
ms = {
  // same as "sayHi: function(){...}"
  sayHi() {
    alert("Hello");
  }
};

// This in methods -------------------------------------------------------------

let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object" where the function is invoqued
    alert(this.name);
  }

};

user.sayHi(); 