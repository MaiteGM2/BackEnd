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

const updateUser = (user, password, res) => {
    fs.readFile(userPath, "utf8", (err, data) => {
        if (err) {
            return res.status(404).send("Error 404: File not found.");
        }

        let userFound = false;
        const users = data.split("\n").filter(line => line.trim() !== "");
        const updatedUsers = users.map(line => {
            const [existingUser, existingPassword] = line.split("|");
            if (existingUser === user) {
                userFound = true;
                return `${user}|${password}`;
            }
            return line;
        });

        if (!userFound) {
            return res.status(404).send("User not found.");
        }

        fs.writeFile(userPath, updatedUsers.join("\n"), (err) => {
            if (err) {
                return res.status(500).send("Error updating the user.");
            }
            res.send("User updated.");
        });
    });
};


const deleteUser = (user, res) => {
    fs.readFile(userPath, "utf8", (err, data) => {
        if (err) {
            return res.status(404).send("Error 404: File not found.");
        }

        const users = data.split("\n").filter(line => line.trim() !== "");
        const updatedUsers = users.filter(line => line.split("|")[0] !== user);

        fs.writeFile(userPath, updatedUsers.join("\n"), (err) => {
            if (err) {
                return res.status(500).send("Error deleting the user.");
            }
            res.send("User deleted.");
        });
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

app.put("/user", (req, res) => {
    const { user, password } = req.body;
    updateUser(user, password, res);
});

app.delete("/user", (req, res) => {
    const { user } = req.body;
    deleteUser(user, res);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.use((req, res) => {
    res.status(404).send("Error 404: File not found.");
});
