const EventEmitter = require("events");

// Init object
const eventEmitter = new EventEmitter();

// Create event listener
eventEmitter.on("event", () => {
  console.log("Event fired!");
});

// Init event
eventEmitter.emit("event");
