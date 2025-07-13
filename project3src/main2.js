const http = require("http");
const fs = require("fs");
const path = require("path");
const { error } = require("console");

const hostname = "127.0.0.1";
const port = 3000;

// Serving html+css+js file with routing

const server = http.createServer((req, res) => {
  //For HTML file

  if (req.url === "/" || req.url === "/index.html") {
    fs.readFile("./public/index.html", (err, html) => {
      if (err) {
        res.statusCode = 500;
        res.end("Html file not found");
        return;
      }

      res.statusCode = 200;
      res.setHeader("Content-type", "text/html");
      res.end(html);
    });
  }
  //For CSS file
  else if (req.url === "/styles.css") {
    fs.readFile("./public/styles.css", (err, css) => {
      if (err) {
        res.statusCode = 500;
        res.end("CSS file not found");
        return;
      }

      res.statusCode = 200;
      res.setHeader("Content-type", "text/css");
      res.end(css);
    });
  }

  //For JS file
  else if (req.url === "/logic.js") {
    fs.readFile("./public/logic.js", (err, js) => {
      if (err) {
        res.statusCode = 500;
        res.end("JS file not found");
        return;
      }

      res.statusCode = 200;
      res.setHeader("Content-type", "text/js");
      res.end(js);
    });
  }
  //for Error 404 Page
  else {
    res.statusCode = 404;
    res.end("404 Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server started at port ${port}`);
});
