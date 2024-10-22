const fs = require('fs');

const writeStream = fs.createWriteStream(`streams/files/largeFile.txt`);

function addLines(){
    const maxLines = 2000;
    for (let i = 1; i <= maxLines; i++) {
        const line = `Line number ${i}\n`;

        writeStream.write(line);
    }

    writeStream.on('error', (err) => {
        console.error('Error writing file', err);
    })

    writeStream.end(() => {
        console.log(`File created with ${maxLines} lines.`);
      });
}

addLines();

