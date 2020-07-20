require("dotenv").config({ path: __dirname + "/config/.env" });
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/sequelize");

const router = require("./routes");
const seedDb = require("./db/seeds");

const app = express();
const PORT = process.env.HTTP_PORT || 5000;

db.sequelize.sync().then(seedDb(db));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

app.listen(PORT, () =>
  console.log(`school-rest-api listening on port ${PORT}!`)
);
