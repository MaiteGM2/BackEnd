const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  const response = {
    message: "Hola Mundo desde el Servidor",
  };

  res.end(JSON.stringify(response));
});

const port = 3000;

server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});