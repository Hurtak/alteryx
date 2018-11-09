const jwt = require("jsonwebtoken");
const config = require("../config.js");

module.exports = (req, res, next) => {
  if (req.headers && req.headers.authorization) {
    try {
      req.user = jwt.verify(req.headers.authorization, config.jwt);
    } catch (err) {
      return res.status(401).json({
        error: {
          msg: "Failed to authenticate token."
        }
      });
    }
  }

  return res.status(401).json({
    error: {
      msg: "No token."
    }
  });
};
