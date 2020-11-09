const myEvent = require("events");// Nodes event emitter
//let myEvents=require("./event");  // our own event emitter
let constant=require("./config.js");

let event1=new myEvent();

event1.on(constant.GREET,()=>{console.log("hellow from India")});
event1.on(constant.GREET,()=>{console.log("hellow from Canada")});

// event1.emits('greet');  //Our emiiter
event1.emit(constant.GREET);   //node emitter 


// the concept of event emitter in node is register all function on() and exicutes all at once.
