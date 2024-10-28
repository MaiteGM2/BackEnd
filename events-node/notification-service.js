const eventBus = require('./events-bus');
const delayNotif = 2000;

eventBus.on('userCreated', (user) => {
    setTimeout(() => {
        console.log(`The user ${user.name} has been created successfully`);
    }, delayNotif);
})
