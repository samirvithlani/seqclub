var fs = require('fs')

var readerStream = fs.createReadStream('demo.txt')

var writerStream = fs.createWriteStream('demo2.txt')


readerStream.pipe(writerStream)

console.log("done..")