const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

/*
eventEmitter.on("start", () => {
  console.log("started");
});

eventEmitter.emit("start");
*/

// You can pass arguments to the event handler by passing them as additional 
// arguments to emit(): --------------------------------------------------------

eventEmitter.on("start", (number) => {
  console.log(`started ${number}`);
});

eventEmitter.emit("start", 23);
