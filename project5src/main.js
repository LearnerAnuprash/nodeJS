//Building REST API using nodeJS and expressJS

const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const port = 8000;

//Middleware --Plugin
app.use(express.urlencoded({ extended: false }));

//When the platform is web /pc
app.get("/users", (req, res) => {
  const html = `
  <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});

//For the route /users/:id i.e. the ':' before the id shows that it is a dynamic entity
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    //edit the user with id
    return res.json({ status: "Pending" });
  })
  .delete((req, res) => {
    //Delete the user with id
    return res.json({ status: "Pending" });
  });

//Using post request
app.post("/api/users", (req, res) => {
  //create new user
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: users.length });
  });
});

//For hybrid application compatibility i.e. alexa or mobile app or any IOT
app.get("/api/users", (req, res) => {
  return res.json(users);
});

//Listening on port 8000

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
