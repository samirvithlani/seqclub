//import event module..

var events = require('events')

//create even emitter object
var eventEmitter = new events.EventEmitter();

//handler of event..

var connecthandler = function connected(){

    console.log("connected successfully..")
}
//bind event with handler...

eventEmitter.on('connection',connecthandler)
//fire event..
eventEmitter.emit('connection')

