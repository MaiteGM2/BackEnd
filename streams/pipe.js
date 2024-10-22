const fs = require('fs');

const readStream = fs.createReadStream('streams/files/largeFile.txt');
const writeStream = fs.createWriteStream('streams/files/copyFile.txt');


function copy (){
    readStream.on('error', (err) => {
        console.error('Error reading file:', err);
        return
    })
    
    writeStream.on('error', (err) => {
        console.error('Error writing file:', err);
        return
    })
    
    readStream.pipe(writeStream);
    console.log('File copied successfully.')
}

copy();
