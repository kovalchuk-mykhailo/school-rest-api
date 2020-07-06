require("dotenv").config({ path: __dirname + "/config/.env" });
const express = require("express");
const db = require("./db/sequelize");

const app = express();

const PORT = process.env.HTTP_PORT || 5000;

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.get("/", (req, res) => {
  res.send("Ok!");
});

app.listen(PORT, () =>
  console.log(`school-rest-api listening on port ${PORT}!`)
);
