// const person = require('./person')
//
//
// console.log(person.age)


// const Logger = require('./logger')
//
//
// const logger = new Logger()   // create a new instance using the class
//
//
// logger.on('message', (data) => console.log('Called Listener', data))
//
//
// logger.log('this is a message')
// /*
//   Called Listener {
//   id: '6db07639-785c-4309-8a45-1963396d1e24',
//   msg: 'this is a message'
//   }
// */


const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
  // console.log(req.url) // will be printed in the console
  // // req.url - shows us what url is being called
  //
  // if(req.url === '/') { // if the url is 'mywebsite.com/' e.g. homepage address
  //   fs.readFile(   // use fs to find where to read the file from
  //     path.join(__dirname, 'public', 'index.html'),  // join the various locations into one
  //     (err, content) => {  // second arg is callback with err and content
  //       // content is the content of the file at the location stipulated
  //       if (err) throw err // if there's an error throw it
  //       res.writeHead(200, { 'content-type': 'text/html' }) // otherwise write this info to the head of the document
  //       res.end(content) // and send/serve the content
  //     }
  //   )
  // }
  //
  //
  // if(req.url === '/about') { // if the url is 'mywebsite.com/' e.g. homepage address
  //   fs.readFile(   // use fs to find where to read the file from
  //     path.join(__dirname, 'public', 'about.html'),  // join the various locations into one
  //     (err, content) => {  // second arg is callback with err and content
  //       // content is the content of the file at the location stipulated
  //       if (err) throw err // if there's an error throw it
  //       res.writeHead(200, { 'content-type': 'text/html' }) // otherwise write this info to the head of the document
  //       res.end(content) // and send/serve the content
  //     }
  //   )
  // }
  //
  // if(req.url === '/api/users') {
  //   const users = [       // fake data to simulate data from a database / backend
  //     { name: 'bobby', age: 40 },
  //     { name: 'billy', age: 20 }
  //   ]
  //   res.writeHead(200, { 'content-type': 'application/json' }) // otherwise write this info to the head of the document
  //   res.end(JSON.stringify(users))  // serve the 'users' data in JSON format
  // }


  // ~~~~~~~~~~~~~  above is a basic example but isn't very efficient as we'd have to create an if block for each page of our site...

  // ~~~~~~~~~~~~~~~ below uses a more efficient method with dynamic routes
  //••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

  // build file path
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
  // build a dynamic path..  hardcode the homepage to be '/'
  console.log(filePath)

  // get the extension of the file
  let extname = path.extname(filePath)

  // initial content type
  let contentType = 'text/html'

  // check extention and set content type to be different if required
  switch (extname) {
    case '.js':
      contentType = 'text/javascript'
      break
    case '.css':
      contentType = 'text/css'
      break
    case '.json':
      contentType = 'application/json'
      break
    case '.png':
      contentType = 'image/png'
      break
    case '.jpg':
      contentType = 'image/jpg'
      break
  }

  // Read file
  fs.readFile(filePath, (err, content) => {
    if(err) {
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if(err.code === 'ENOENT') {
        // page not found
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
          res.writeHead(200, { 'content-type': 'text/html' })
          res.end(content, 'utf8')
        })
      } else {
        // some server error
        res.writeHead(500)
        res.end(`server error: ${err.code}`)
      }
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    } else {
      // Successful
      res.writeHead(200, { 'content-type': contentType })
      res.end(content, 'utf8')
    }
  })
})



const PORT = process.env.PORT || 5000
// will look first for an environment variable to get the port info... if that's not there it will run on port 5000

server.listen(PORT, () => console.log(`server running on port ${PORT}`))
