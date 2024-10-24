const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if(req.url === "/"){
    res.end("¡Hello, welcome to my server!");
  }

});

const port = 3000;

server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});