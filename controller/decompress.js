var fs = require('fs')
var zlib = require('zlib')

fs.createReadStream('demo2.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('demo3.txt'))
console.log("done..")