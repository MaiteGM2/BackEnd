const eventBus = require('./events-bus');
const fs = require("fs");

eventBus.on('userCreated', (user) => {
    const newUser = `${user.id}|${user.name}\n`;
    appendFile(newUser);
})

function appendFile(user) {    
 fs.appendFile('./files/log.txt', user, (err) => {
        if (err) {
            console.log('Error adding the user.');
            return
        } else {
            console.log("User added.");
            return
        }
    });
}   
