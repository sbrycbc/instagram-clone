const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectToDatabase = require('./src/config/db.js');
const authRoutes = require('./src/routes/auth.js');
const userRoutes = require('./src/routes/users.js');
const postRoutes = require('./src/routes/posts.js');



dotenv.config();


// Connection to the DB
connectToDatabase();

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;


// middleware
app.use(express.json());
app.use(morgan("common"));



app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);










app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
