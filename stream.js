const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog.txt',{ encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

readStream.on('data', (chunck) => {
    console.log('-------New Chunk -------');
    console.log(chunck);

    writeStream.write('\n New Chaunk \n');
    writeStream.write(chunck);
});