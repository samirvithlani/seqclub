var fs = require('fs')
var zlib = require('zlib')

fs.createReadStream('demo2.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('demo2.txt.gz'))

console.log('file comressed.....')