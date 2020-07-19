require("dotenv").config({ path: __dirname + "/config/.env" });
const express = require("express");
const db = require("./db/sequelize");

const router = require("./routes");

const app = express();
const PORT = process.env.HTTP_PORT || 5000;

db.sequelize.sync();

app.use(express.json());

app.use(router);

app.listen(PORT, () =>
  console.log(`school-rest-api listening on port ${PORT}!`)
);
