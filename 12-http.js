const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short story");
  }
  res.end(
    `<h1>Oops!</h1> <p>We can't seem to find the page you are looking for.</p> <a href="/>GO HOME</a>`
  );
});

server.listen(4000);

// req = incoming request
// res = the response

// localhost:5000 is blocked by Apple Airplay
