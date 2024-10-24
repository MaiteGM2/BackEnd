const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola esto es un GET desde Express");
});

app.post("/", (req, res) => {
  let response = {
    mensaje: "Datos recibidos",
    data: {
      usuario: "admin",
      role: "admin",
    },
  };

  res.json(response);
});

app.patch("/data", (req, res) => {
    let response = {
        mensaje: "Datos actualizados",
        data: {
          usuario: "admin",
          role: "root",
        },
    };

    res.json(response);
});

app.delete("/", (req, res) => {
    res.end("Hola esto es un DELETE desde Express");
})

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
})