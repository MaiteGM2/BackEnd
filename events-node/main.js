const express = require("express");
const app = express();
const port = 2000;
app.use(express.json());

const eventBus = require('./events-bus');
require('./notification-service');
require('./log-service');

app.post("/task", (req, res) => {
    const { id, name } = req.body;
    const user = { id, name };

    verifyData(user, res);
    eventBus.emit('userCreated', user);
    res.json(req.body);
});

function verifyData(user, res) {
    if(!user.id || !user.name){
        res.status(500).send('Invalid parameters');
    } 
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
 