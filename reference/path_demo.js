const path = require('path')

// to find base file name only ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log(__filename)
// = /Users/adampond/development/backend-projects/node-1/reference/path_demo.js
console.log(path.basename(__filename))
// = path_demo.js

// to find directory ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log(__dirname)
// = /Users/adampond/development/backend-projects/node-1/reference
console.log(path.dirname(__filename))
// = /Users/adampond/development/backend-projects/node-1/reference  ~~~ both produce the same result

// to find file extension ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log(path.extname(__filename))

// create an object from parts of the path ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log(path.parse(__filename))
// give us access to this object
/*
{
  root: '/',
  dir: '/Users/adampond/development/backend-projects/node-1/reference',
  base: 'path_demo.js',
  ext: '.js',
  name: 'path_demo'
}
*/
console.log(path.parse(__filename).base)
// = path_demo.js

// concatenate paths ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log(path.join(__dirname, 'test', 'adam', 'hello.html'))
// = /Users/adampond/development/backend-projects/node-1/reference/test/adam/hello.html
