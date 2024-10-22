const fs = require('fs');

fs.appendFile('file-system/files/data.txt', '\nAppended text', (err) => {
    if(err){
        console.error('Failed to add new text:', err);
        return;
    }
    console.log('Data appended successfully');
})