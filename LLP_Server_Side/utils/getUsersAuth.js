const jwt = require("jsonwebtoken");

const ensureAuthenticates = (req, res, next) => {
  if (!req.headers["authorization"]) {
    return res.status(403).json({ message: "Token is Required" });
  }
  try {
    const decoded = jwt.verify(
      req.headers["authorization"],
      process.env.SECRET
    );
    user = decoded;
    // console.log(decoded);
    // const checkingToken = req.header('Authorization');
    // console.log('Received Token:', checkingToken);
    // console.log(user);
    next();
  } catch (err) {
    return res.status(403).json({ message: "Token is invalid" });
  }
};

module.exports = {
  ensureAuthenticates,
};
