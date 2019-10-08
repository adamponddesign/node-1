// fs = file system

const fs = require('fs')
const path = require('path')

// create folder ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if (err) throw err
//   console.log('folder created')
// })


// create and write to file ~~~~~~~~~~~~~~~~~~~~ overwrites if file already has content
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'this is the content that will be written.', err => {
//   if (err) throw err
//   console.log('file written to')
//
//   // update a file ~~~~~~~~~ callback within writeFile
//   fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' This is the content that will be appended to the existing file.', err => {
//     if (err) throw err
//     console.log('file written to')
//   })
// })



// read file ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//   if (err) throw err
//   console.log(data)
// })

// rename file ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloWorld.txt'),
  err => {
    if (err) throw err
    console.log('file renamed')
  })
