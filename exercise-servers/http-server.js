const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if(req.url === "/"){
    res.statusCode = 200;
    res.end("¡Hello, welcome to my server!");
  } else if(req.utl === "/about"){
    res.statusCode = 200;
    res.end("I am a member of the 2024 bootcamp.");
  } else if(req.url === "/error"){
    res.statusCode = 404;
    res.end("The requested url was not found on this server.")
  }

});

const port = 3000;

server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});