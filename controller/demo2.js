const events = require('events')

const eventEmitter = new events.EventEmitter();

//create listner/handler

var listner1 = function listner1(){

    console.log("listner 1 executed.")
}
var listner2 = function listner2(){

    console.log("listner 2 executed.")
}

eventEmitter.setMaxListeners(3);
eventEmitter.on('message',function(){

    console.log('message event called..')
})


eventEmitter.addListener('connection',listner1)
eventEmitter.addListener('connection',listner2)
eventEmitter.on('connection',listner1)

eventEmitter.emit('connection')

evenetListners = require('events').EventEmitter.listenerCount(eventEmitter,'connection')
console.log("total active listners are ",evenetListners)

//eventEmitter.removeListener('connection',listner1)
//eventEmitter.removeListener('connection',listner2)
console.log(eventEmitter.listeners('connection'))
eventEmitter.removeAllListeners('connection')
console.log("after remove....")
evenetListners = require('events').EventEmitter.listenerCount(eventEmitter,'connection')
console.log("total active listners are ",evenetListners)

eventEmitter.emit('message')
console.log(eventEmitter.listeners('message'))

