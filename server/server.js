const express = require("express");
const dotenv = require("dotenv");
const connectToDatabase = require('./src/config/db.js');

dotenv.config();

// Connection to the DB
connectToDatabase();

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
