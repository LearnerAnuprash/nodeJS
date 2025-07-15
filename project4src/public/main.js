/* Program which creates web server using express*/

//Importing express
const express = require("express");
const http = require("http");

//Inside the variable app, we're storing all express modules
const app = express();

//Handling GET routes  for different urls using express
app.get("/", (req, res) => {
  return res.send("Hello From home Page");
});

app.get("/about", (req, res) => {
  return res.send(
    "hello from About Page" +
      "\tHi\t" +
      req.query.name +
      "\tYou are :" +
      req.query.age +
      "\tyears old!"
  );
});

//Creating server using express
app.listen(3000, () => {
  console.log("Server Started");
});
