//Importing express
const express = require("express");
const http = require("http");

//Inside the variable app, we're storing all express modules
const app = express();

//Handling GET method for different urls using express
app.get("/", (req, res) => {
  return res.send("Hello From home Page");
});

app.get("/about", (req, res) => {
  return res.send("hello from About Page");
});

//Creating http server using express
const server = http.createServer(app);

// Listening when server is created
server.listen(3000, () => {
  console.log("Server Started !!");
});
