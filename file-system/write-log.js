const fs = require('fs');

fs.readFile('file-system/files/non-existent.txt', 'utf8', (err, data) => {
    if(err){
        console.error('Could not read file:', err);
        fs.writeFile('file-system/files/log.txt', `\\${err}`, (err) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('File writen successfully');
        })
    }
    console.log(data);
})