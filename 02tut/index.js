const express = require("express");
require("dotenv").config();
const app = express();
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("./middleware/logger");
const corsOptions = require("./config/corsOptions");
const verifyJWT = require("./middleware/verifyJWT");

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(logger);
app.use(cookieParser());

app.use("/", require("./routes"));
app.get("/", (req, res) => {
  res.send("Welcome to Localhost:3500");
});
app.use("/api/register", require("./routes/register"));
app.use("/api/login", require("./routes/login"));
app.use("/api/refreshToken", require("./routes/refreshRoute"));

app.use(verifyJWT);
app.use("/api/employee", require("./routes/employeeRoute"));
app.use("/api/logout", require("./routes/logoutRoute"));

app.all("*", (req, res) => {
  res.status(404).send("404 not found");
});

const port = process.env.PORT || 3500;

app.listen(port, () => console.log(`app running on port ${port}`));
