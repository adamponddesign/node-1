// os - operating system

const os = require('os')

// platform - windows mac etc
console.log(os.platform())
// = darwin (means mac)
// if windows you would receive win32

// CPU architecture
console.log(os.arch())
// = x64

// CPU core info
console.log(os.cpus())
// returns an object with information on every core of the cpu

// free memory
console.log(os.freemem())
// = 1048502272

// total memory
console.log(os.totalmem())
// = 8589934592

// home directory
console.log(os.homedir())
// = /Users/adampond

// Uptime - the amount of time your system has been up
console.log(os.uptime())
// = 566522
