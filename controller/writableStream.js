var fs = require('fs')
var data = '65'

var writerStream = fs.createWriteStream('node2.txt');

writerStream.setDefaultEncoding('latin1')

writerStream.write(data)

writerStream.end();

writerStream.on('finish',function(){

    console.log('suces...')
})

