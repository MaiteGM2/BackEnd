const fs = require('fs');

fs.unlink('file-system/files/data.txt', (err) => {
    if(err){
        console.error('Could not delete file:', err);
        return;
    }
    console.log('File deleted');
})