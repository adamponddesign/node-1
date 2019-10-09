const EventEmitter = require('events')
const uuid = require('uuid') // id generator

// console.log(uuid.v4())
// = b80d183b-96e8-4d44-b8aa-dcaa5c72938c

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit('message', { id: uuid.v4(), msg })
    // because Logger is extending EventEmitter then we have access to the EventEmitter's methods / functions
    // emit is one of these... so we can use this.emit
  }
}


module.exports = Logger
