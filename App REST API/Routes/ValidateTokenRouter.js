const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const verifyHeader = req.headers.token;
  if (verifyHeader) {
    const token = verifyHeader.split(" ")[1];
    jwt.verify(token, process.env.jwt, (err, client) => {
      if (err) res.status(403).json({ message: "Token is not validate" });
      req.client = client;
      next();
    });
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

const validateAndAuthorizationToken = (req, res, next) => {
  validateToken(req, res, () => {
    if (req.client.id === req.params.id || req.client.isAdmin) {
      next();
    } else {
      res.status(401).json({ message: "Not Allow To Access" });
    }
  });
};

const validateAdminToken = (req, res, next) => {
  validateToken(req, res, () => {
    if (req.client.isAdmin) {
      next();
    } else {
      res.status(401).json({ message: "Not Allow To Access" });
    }
  });
};

module.exports = {
  validateToken,
  validateAndAuthorizationToken,
  validateAdminToken,
};
