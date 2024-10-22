const fs = require('fs');

const readStream = fs.createReadStream('streams/files/largeFile.txt', 'utf8');

readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
    console.log('Finished reading file.');
});
