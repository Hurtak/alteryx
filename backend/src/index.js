const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const config = require("./config.js");
const middlewareAuth = require("./middlewares/auth.js");
const controllerUser = require("./controllers/user.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/user/login", controllerUser.login);
app.use("/user/:id", middlewareAuth, controllerUser.getUser);
app.use("/users", middlewareAuth, controllerUser.getUsers);

app.listen(config.port, () => {
  console.log(`API Started on ${config.port}`);
});
