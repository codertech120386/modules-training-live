const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

const { doSomething } = require("./another");

const abcd = eventEmitter.on("event-emitted", (data = null) => {
  console.log("I am listening to event-emitted");
  console.log(data);
});
console.log("abcd", abcd);
eventEmitter.on("event-emitted", doSomething);
eventEmitter.emit("event-emitted", { name: "Dhaval" });

// EventEmitter[type] = [callback1, callback2]
