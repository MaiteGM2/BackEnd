const fs = require('fs');

fs.readFile('files/data.txt', 'utf8', (err, data) => {
    if(err){
        console.error('Could not read file:', err);
        return;
    }
    console.log(data);
})