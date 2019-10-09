const EventEmitter = require('events')

// Create class
class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter()

// Event Listener
// the console log is a callback function and will run after first argument occurs
myEmitter.on('event', () => console.log('Event fired!'))

// init event
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
// = Event fired!
// Event fired!
// Event fired!
