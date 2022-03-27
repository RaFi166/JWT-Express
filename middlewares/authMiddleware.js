const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = authorization.split(" ")[1];
    var decoded = jwt.verify(token, process.env.JWT_TOKEN);
    const { name } = decoded;
    req.name = name;
    next();
  } catch {
    next("auth failed");
  }
};

module.exports = authMiddleware;
