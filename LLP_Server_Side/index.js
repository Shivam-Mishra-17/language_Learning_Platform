const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
require("./config/db.js");

const routes = require("./routes/authRoutes.js");

const port = process.env.port || 3001;
app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
