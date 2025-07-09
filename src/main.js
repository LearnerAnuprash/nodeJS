const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

fs.readFile("index.html", (err, html) => {
  if (err) {
    throw err;
  }

  const server = http.createServer((req, res) => {
    if (req.url === "/" || req.url === "/index.html") {
      res.statusCode = 200;
      res.setHeader("Content-type", "text/html");
      res.write(html);
      res.end();
    } else if (req.url === "/styles.css") {
      fs.readFile("styles.css", (err, css) => {
        if (err) {
          res.statusCode = 404;
          res.end("CSS file not found");
        } else {
          res.statusCode = 200;
          res.setHeader("Content-type", "text/css");
          res.end(css);
        }
      });
    } else {
      res.statusCode = 404;
      res.end("404 Not found");
    }
  });

  server.listen(port, hostname, () => {
    console.log(`Server Started at port ${port}`);
  });
});
