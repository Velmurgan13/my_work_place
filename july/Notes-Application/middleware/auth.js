require("dotenv").config();
const JWT = require("jsonwebtoken");

const Auth = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    // console.log(token);
    if (!token) return res.status(400).json({ msg: "Invalid Authorization" });

    JWT.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err)
        return res.status(400).json({ msg: "Authorization is not Valid" });

      req.user = user;
      next();
    });
  } catch (err) {
    return res.status(400).json({ msg: err.message });
  }
};

module.exports = Auth;
