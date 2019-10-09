// const url = require('url')

const myUrl = new URL('https://mywebsite.com:8000/hello.html?id=100&status=active')

// Serialized URL
console.log(myUrl.href)
console.log(myUrl.toString())
// = https://mywebsite.com/hello.html?id=100&status=active

// Host (root domain)
console.log(myUrl.host)
// = mywebsite.com:8000   gets port info as well as host

// Hostname (no port info)
console.log(myUrl.hostname)
// = mywebsite.com        just host information

// Pathname
console.log(myUrl.pathname)
// = /hello.html

// Serialized query (query string)
console.log(myUrl.search)
// = ?id=100&status=active

// Params object (query string info as an object)
console.log(myUrl.searchParams)
// = URLSearchParams { 'id' => '100', 'status' => 'active' }

// Add Params
myUrl.searchParams.append('abc', '123')  // key value pair
console.log(myUrl.searchParams)
// = URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }


// Loop through the Params
// for each k/v pair... do this
myUrl.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value}`)
})
