//reading from streams
var fs = require('fs')

var data = ''
//create readble stream

var readerStream = fs.createReadStream('node1.txt')
//encodding
readerStream.setEncoding('utf8')

//event handler...

readerStream.on('data', function (chunk) {

    data += chunk;
})
readerStream.on('end', function () {
    console.log(data)
})
readerStream.on('error', function (err) {

    console.log(err.stack)
})



