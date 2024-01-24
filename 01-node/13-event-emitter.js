/* 
Event
A signal that something has happened

*/

//importing the EventEmitter Class
const EventEmitter = require("events");

//Creating an instance of the class, so essentially we have the object
const emitter = new EventEmitter();

/* 
 emit - emit an event aka making a noise, produce - signaling an event has happened
 on - listen for an event. first parameter is name of event, 
      second is callback function also known as listener. the function will be called when the event is raised

i.e:

Register a listener
emitter.on('messageLogged',()=>{
    console.log('Listener called')
})

Raise an event
emitter.emit('messageLogged);
*/

emitter.on("response", () => {
  console.log("data received");
});

// You can have as many functions as you want to listen to the same event

emitter.on("response", () => {
  console.log("some other logic");
});

emitter.on("response", (name, id) => {
  console.log(`data recieved user ${name} with id: ${id}`);
});

// we can pass in arguments when we emit events
emitter.emit("response", "john", 34);

/*
ORDER IS IMPORTANT BECAUSE if we register the listener after calling the emit method,
nothing would have happened. Why? When we call the emit method, the emit method 
iterates all(goes through each listener) the registered listener and calls them synchronously
 */
