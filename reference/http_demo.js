const http = require('http')

// Create server object (a simple web server)
http.createServer((req, res) => {
  // when we get a request we want to write a response (res)
  // Write response
  res.write('Hello this is the response message')  // this will print in the browser
  res.end() // must call this to end the process

}).listen(5000, () => console.log('server running on port 5000'))
// stipulate the port number, with a call back function to display a message when the port in activated and listening.


// run this file in the console
// we see the server is active and get the 'server running' message in terminal
// in browser go to localhost:5000 and you will see the response message from 'res.write'
