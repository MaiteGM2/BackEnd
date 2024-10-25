const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());

const userPath = path.join(__dirname, "files", 'user.txt');

const readFile = (res) => {
    fs.readFile(userPath, 'utf8', (err, data) => {
        if (err) {
            res.status(404).send('Error 404: File not found.');
        } else {
            res.json(data.trim().split('\n').map(line => {
                const [user, password] = line.split('|');
                return { user, password };
            }));
        }
    });
}

const appendData = (newUser, res) => {
    fs.appendFile(userPath, newUser, (err) => {
        if (err) {
            res.status(500).send('Error adding the user.');
        } else {
            res.status(200).send("User added.");
        }
    });
}

app.get("/user", (req, res) => {
    readFile(res);
});

app.post("/user", (req, res) => {
    const { user, password } = req.body;
    const newUser = `${user}|${password}\n`;
    appendData(newUser, res);
});

