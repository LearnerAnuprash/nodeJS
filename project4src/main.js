/* Program which creates web server using express*/

//Importing express
const express = require("express");
const path = require("path");

//Inside the variable app, we're storing all express modules
const app = express();

//Handling GET routes  for different urls using express
// app.get("/", (req, res) => {
//   return res.send("Hello From home Page");
// });

// app.get("/about", (req, res) => {
//   return res.send(
//     "hello from About Page" +
//       "\tHi\t" +
//       req.query.name +
//       "\tYou are :" +
//       req.query.age +
//       "\tyears old!"
//   );
// });

//This line automatically serves all static files inside the 'public' directory
app.use(express.static("public"));

//For only serving one file eg: html file
// app.get("/", (req, res) => {
//   console.log("Logging...");
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });

//Creating server using express
app.listen(3000, () => {
  console.log("Server Started on http://localhost:3000");
});
