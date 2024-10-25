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

app.get("/user", (req, res) => {
    readFile(res);
});

