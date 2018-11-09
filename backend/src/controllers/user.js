const jwt = require("jsonwebtoken");
const config = require("../config.js");

const login = (req, res) => {
  console.log(req.body);
  if (req.body.username === "admin" && req.body.password === "admin") {
    res.json({
      user: {
        id: 1,
        username: "admin"
      },
      jwt: jwt.sign(
        {
          id: 1
        },
        config.jwt,
        { expiresIn: 60 * 60 }
      )
    });
  } else {
    res.status(401).json({
      error: {
        message: "Wrong username or password!"
      }
    });
  }
};

const getUser = (req, res) => {
  res.json({
    user: req.user
  });
};

const getUsers = (req, res) => {
  res.json({
    users: [{ id: 1, username: "admin" }]
  });
};

module.exports = {
  login,
  getUser,
  getUsers
};
