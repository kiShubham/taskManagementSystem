const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  //if there is no token at all
  if (!token) {
    // return res.sendStatus(401); // unathorized ;
    return res.status(401).json({ message: "you are not authorized" });
  }

  // if there is token but it is not valid ;
  jwt.verify(token, process.env.JWT_Secret, (err, user) => {
    if (err) return res.sendStatus(403); // forbidden

    req.user = user;
    // console.log("userinmiddleware", user);
    next();
  });

  //   next();
};
module.exports = {
  authenticateToken,
};
